// @flow
/* eslint-disable no-console */
import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphiqlKoa } from 'apollo-server-koa';
import serve from 'koa-static';
import path from 'path';
import mount from 'koa-mount';

import graphql from 'src/server/graphql';
import app from 'src/server/app';

import type { Context } from 'koa';
import type { Config } from 'src/config';

export default async (config: Config) => {
  const server = new Koa();
  const router = new Router();

  router.post('/graphql', graphql());
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
  router.get('/health', (ctx: Context) => { ctx.body = 'OK'; });
  router.get('*', app());

  if (config.NODE_ENV === 'development') {
    const development = require('src/development/middleware').default; // eslint-disable-line global-require
    server.use(development());
  }

  server.use(koaBody());
  server.use(mount('/static', serve(path.resolve(__dirname, '../static'))));
  server.use(router.routes());
  server.use(router.allowedMethods());

  const port = config.PORT;

  server.listen(port, () => console.info(`server running on port ${port}`));
};

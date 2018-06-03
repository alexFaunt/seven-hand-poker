// @flow
/* eslint-disable no-console */
import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphiqlKoa } from 'apollo-server-koa';
import koaWebpack from 'koa-webpack'; // eslint-disable-line global-require, import/no-extraneous-dependencies
import webpack from 'webpack'; // eslint-disable-line global-require, import/no-extraneous-dependencies
import serve from 'koa-static';
import path from 'path';
import mount from 'koa-mount';

import graphql from 'src/server/graphql';
import app from 'src/server/app';
import webpackConfig from 'webpack-config/dev';

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
    server.use(koaWebpack({
      compiler: webpack(webpackConfig),
    }));
  }

  server.use(koaBody());
  server.use(mount('/static', serve(path.resolve(__dirname, '../static'))));
  server.use(router.routes());
  server.use(router.allowedMethods());

  const port = config.PORT;

  server.listen(port, () => console.info(`server running on port ${port}`));
};

/* eslint-disable no-console */

import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphiqlKoa } from 'apollo-server-koa';
import koaWebpack from 'koa-webpack'; // eslint-disable-line global-require, import/no-extraneous-dependencies
import webpack from 'webpack'; // eslint-disable-line global-require, import/no-extraneous-dependencies

import graphql from 'src/server/graphql';
import app from 'src/server/app';
import webpackConfig from 'webpack-config/dev';

export default async (config) => {
  const server = new Koa();
  const router = new Router();

  router.post('/graphql', graphql(config));
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
  router.get('/health', (ctx) => { ctx.body = 'OK'; });

  router.get('*', app());
  // TODO some how work out if it's a 404 and set the status

  server.use(koaBody());

  // TODO static asset server for prod
  if (config.NODE_ENV === 'development') {
    server.use(koaWebpack({
      compiler: webpack(webpackConfig),
    }));
  }

  server.use(router.routes());
  server.use(router.allowedMethods());

  const port = config.PORT;

  server.listen(port, () => console.info(`server running on port ${port}`));
};

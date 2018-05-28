/* eslint-disable no-console */

import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';

import graphql from 'src/server/graphql';
import { graphiqlKoa } from 'apollo-server-koa';

export default async function server(config) {
  const app = new Koa();
  const router = new Router();

  router.post('/graphql', graphql(config));
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

  app.use(koaBody());
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.use((ctx) => {
    ctx.body = 'Yeah it works';
  });

  const port = config.PORT;

  // Ignoring this as it would just be spam in sentry.
  app.listen(port, () => console.info(`server running on port ${port}`));
}

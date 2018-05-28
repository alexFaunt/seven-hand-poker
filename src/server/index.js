/* eslint-disable no-console */

import Koa from 'koa';
import Router from 'koa-router';

export default async function server(config = {}) {
  const app = new Koa();
  const router = new Router();

  app.use(router.routes());
  app.use(router.allowedMethods());

  app.use((ctx) => {
    ctx.body = 'Yeah it works';
  });

  const port = config.PORT || 8080;

  // Ignoring this as it would just be spam in sentry.
  app.listen(port, () => console.info(`server running on port ${port}`));
}

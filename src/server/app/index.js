// @flow
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { SchemaLink } from 'apollo-link-schema';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StaticRouter } from 'react-router';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import schema from 'src/server/graphql/schema';
import Html from 'src/server/app/html';
import { ServerStyleSheet } from 'styled-components';

import type { Context } from 'koa';

export default () => async (ctx: Context, next: () => Promise<void>) => {
  // Using require here to make the watcher work
  const App = require('src/app').default; // eslint-disable-line global-require
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

  const reactRouterContext = {};
  const AppContent = (
    <ApolloProvider client={client}>
      <StaticRouter location={ctx.req.url} context={reactRouterContext}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  // React router said we should redirect
  if (reactRouterContext.url) {
    return ctx.redirect(reactRouterContext.url);
  }

  // Populate the apollo client with data required for the page
  await getDataFromTree(AppContent);

  // Create a stylesheet for our critical path css
  const sheet = new ServerStyleSheet();

  // Render the page, and populate the style sheet
  const content = await renderToString(sheet.collectStyles(AppContent));

  if (reactRouterContext.status) {
    ctx.status = reactRouterContext.status;
  }

  const html = <Html content={content} client={client} sheet={sheet} />;

  ctx.body = `<!doctype html>\n${renderToStaticMarkup(html)}`;

  return next();
};

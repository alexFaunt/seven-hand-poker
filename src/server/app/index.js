import React from 'react';
import { ApolloClient } from 'apollo-client';
import { SchemaLink } from 'apollo-link-schema';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StaticRouter } from 'react-router';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { renderToStaticMarkup } from 'react-dom/server';

import schema from 'src/server/graphql/schema';
import Html from 'src/server/app/html';

export default () => async (ctx, next) => {
  // Using require here to make the watcher work
  const App = require('src/app').default; // eslint-disable-line global-require
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

  const context = {};

  const AppContent = (
    <ApolloProvider client={client}>
      <StaticRouter location={ctx.req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  const content = await renderToStringWithData(AppContent);

  const html = <Html content={content} client={client} />;

  ctx.body = `<!doctype html>\n${renderToStaticMarkup(html)}`;

  return next();
};

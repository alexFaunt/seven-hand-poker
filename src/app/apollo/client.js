// @flow
/* eslint-disable no-console */
/* eslint-env browser */
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import cache from 'src/app/apollo/cache';

import type { Cache } from 'src/app/apollo/cache';

export type Client = ApolloClient<Cache>;

export default (uri: string): Client => (
  new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) => {
            console.log(`[Apollo]: Graphql Error - Message: ${message}, Location: ${locations}, Path: ${path}`);
          });
        }
        if (networkError) {
          console.log(`[Apollo]: Network error - ${networkError}`);
        }
      }),
      new HttpLink({
        uri,
        credentials: 'same-origin',
      }),
    ]),
    cache: cache.restore(window.__APOLLO_STATE__),
  })
);

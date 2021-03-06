// @flow
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import App from 'src/app';
import createClient from 'src/app/apollo/client';

// TODO get url from config
const Client = () => (
  <ApolloProvider client={createClient('http://localhost:8080/graphql')}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

const element = document.getElementById('app');
if (element) {
  hydrate(<Client />, element);
}

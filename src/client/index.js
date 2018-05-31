// @flow
import React from 'react';
import { render } from 'react-dom';
import App from 'src/app';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
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
  render(<Client />, element);
}

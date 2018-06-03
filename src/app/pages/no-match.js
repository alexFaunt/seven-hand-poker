// @flow
import React from 'react';

import type { ContextRouter } from 'react-router';

const NoMatch = ({ staticContext }: ContextRouter) => {
  if (staticContext) {
    // On server side if we hit this page, set the status to 404
    staticContext.status = 404; // eslint-disable-line no-param-reassign
  }

  return <div>404 page!</div>;
};

export default NoMatch;

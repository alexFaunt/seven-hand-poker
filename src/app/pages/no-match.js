// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import { PageHeader } from 'src/app/components/atoms/typography';

import type { ContextRouter } from 'react-router';

const NoMatch = ({ staticContext }: ContextRouter) => {
  if (staticContext) {
    // On server side if we hit this page, set the status to 404
    staticContext.status = 404; // eslint-disable-line no-param-reassign
  }

  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <PageHeader>404 page!</PageHeader>
    </div>
  );
};

export default NoMatch;

// @flow
/* eslint-disable react/no-danger */
import React from 'react';
import { Helmet } from 'react-helmet';

import type { Client } from 'src/app/apollo/client';
import type { ServerStyleSheet } from 'styled-components';

type Props = {
  client: Client,
  content: string,
  sheet: ServerStyleSheet,
};

const Html = ({ content, client, sheet }: Props) => {
  const helmet = Helmet.renderStatic();

  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        { helmet.title.toComponent() }
        { helmet.meta.toComponent() }
        { helmet.link.toComponent() }
        { sheet.getStyleElement() }
      </head>
      <body {...bodyAttrs}>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          charSet="UTF-8"
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(client.extract())};`,
          }}
        />
        <script src="/static/js/bundle.js" charSet="UTF-8" />
      </body>
    </html>
  );
};

export default Html;

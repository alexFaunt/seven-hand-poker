// @flow
/* eslint-disable react/no-danger */
import React from 'react';

import type { Client } from 'src/app/apollo/client';
import type { ServerStyleSheet } from 'styled-components';

type Props = {
  client: Client,
  content: string,
  sheet: ServerStyleSheet,
};

// TODO - the bundle - need some webpack in here
// eslint-disable-next-line
const Html = ({ content, client, sheet }: Props) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Title</title>
      { sheet.getStyleElement() }
    </head>
    <body>
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

export default Html;

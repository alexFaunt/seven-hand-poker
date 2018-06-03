// @flow
/* eslint-disable no-console */
import server from 'src/server';
import config from 'src/config';

const uncaughtError = (error) => {
  console.error('[FATAL]', error);
  process.exit(-1);
};

process.on('uncaughtException', uncaughtError);
process.on('unhandledRejection', uncaughtError);

async function run() {
  try {
    await server(config);
  } catch (error) {
    uncaughtError(error);
  }

  if (config.NODE_ENV === 'development') {
    const watcher = require('src/development/watcher').default; // eslint-disable-line global-require
    watcher();
  }
}

run();

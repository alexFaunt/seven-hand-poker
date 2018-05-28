/* eslint-disable no-console */

import server from 'src/server';

const uncaughtError = (error) => {
  console.error('[FATAL]', error);
  process.exit(-1);
};

process.on('uncaughtException', uncaughtError);
process.on('unhandledRejection', uncaughtError);

async function run() {
  try {
    await server();
  } catch (error) {
    uncaughtError(error);
  }
}

run();

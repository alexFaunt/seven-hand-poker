// @flow
/* eslint-disable no-console */
import server from 'src/server';
import config from 'src/config';
import path from 'path';
import chokidar from 'chokidar'; // eslint-disable-line import/no-extraneous-dependencies,global-require

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

  // In development mode clear changed files from the cache and the entry points for app and graphql
  // This is basically hot module reloading for the server
  if (config.NODE_ENV === 'development') {
    const folder = path.resolve(__dirname);
    const watcher = chokidar.watch(folder);

    watcher.on('ready', () => {
      watcher.on('all', (event, file) => {
        if (file in require.cache) {
          delete require.cache[file];
        }
        delete require.cache[path.join(folder, 'app/index.js')];
        delete require.cache[path.join(folder, 'server/graphql/schema.js')];
      });
    });
  }
}

run();

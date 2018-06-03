// @flow
import path from 'path';
import chokidar from 'chokidar';

export default () => {
  const folder = path.resolve(__dirname, '../');
  console.log('FOLDER', folder);
  const watcher = chokidar.watch(folder);

  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log('[WATCHER] file changed - purging cache');
      Object.keys(require.cache)
        .forEach((id) => {
          if (id.includes('/server/') || id.includes('/app/')) {
            delete require.cache[id];
          }
        });
    });
  });
};

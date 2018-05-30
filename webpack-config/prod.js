const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
  mode: 'production',
});

// TODO - already over recommeneded 244kb for bundle... gotta add some splitting.

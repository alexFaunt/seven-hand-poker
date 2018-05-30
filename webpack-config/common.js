/* eslint-disable no-process-env */
const path = require('path');

module.exports = {
  entry: ['./src/client/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'js/bundle.js', // TODO cache busting hash in prod
    path: path.join(__dirname, '../dist/static/'),
    publicPath: '/static/',
  },
};

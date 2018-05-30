const merge = require('webpack-merge');
const prod = require('./prod.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});

// @flow
import koaWebpack from 'koa-webpack';
import webpack from 'webpack';
import webpackConfig from 'webpack-config/dev';

export default () => koaWebpack({
  compiler: webpack(webpackConfig),
});

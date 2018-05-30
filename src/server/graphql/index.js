import { graphqlKoa } from 'apollo-server-koa';

export default () => graphqlKoa(async (/* ctx */) => ({
  // Using require here to make the watcher work
  schema: require('src/server/graphql/schema').default, // eslint-disable-line global-require
  context: {},
  // formatError,
  debug: false,
}));

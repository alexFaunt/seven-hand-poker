import { graphqlKoa } from 'apollo-server-koa';
import { builder } from 'objection-graphql';
import { Model } from 'objection';
import client from 'src/db/client';

import User from 'src/server/graphql/models/user';

export default (/* config */) => {
  Model.knex(client());

  const schema = builder()
    .model(User)
    .build();

  return graphqlKoa(async (/* ctx */) => ({
    schema,
    context: {},
    // formatError,
    debug: false,
  }));
};

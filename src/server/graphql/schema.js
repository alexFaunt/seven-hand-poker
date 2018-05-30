import { builder } from 'objection-graphql';
import { Model } from 'objection';
import client from 'src/db/client';

import User from 'src/server/graphql/models/user';

Model.knex(client());

export default builder()
  .model(User)
  .build();

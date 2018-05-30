import { builder } from 'objection-graphql';
import { Model } from 'objection';
import client from 'src/db/client';

import Users from 'src/server/graphql/models/users';

Model.knex(client());

export default builder()
  .model(Users, { fieldName: 'user', listFieldName: 'users' })
  .build();

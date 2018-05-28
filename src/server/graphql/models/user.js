import { Model } from 'objection';

export default class User extends Model {
  static tableName = 'user';

  static get jsonSchema() {
    return {
      title: 'User',
      type: 'object',
      required: ['id', 'nickname'],

      properties: {
        id: { type: 'integer' },
        nickname: {
          type: 'string',
          minLength: 6,
          maxLength: 64,
          description: 'Users nickname used for display purposes',
        },
      },
    };
  }

  // static get relationMappings() {
  //   return {};
  // }
}

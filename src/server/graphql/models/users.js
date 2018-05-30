import { Model } from 'objection';

export default class Users extends Model {
  static tableName = 'users';

  static get jsonSchema() {
    return {
      title: 'User',
      description: 'Description of a user',
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
}

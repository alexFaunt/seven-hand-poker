export const up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('nickname').notNullable();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable('users');
};

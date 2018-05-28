export const up = async (knex) => {
  await knex.schema.createTable('user', (table) => {
    table.increments('id');
    table.string('nickname').notNullable();
    // TODO oauth?
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable('user');
};

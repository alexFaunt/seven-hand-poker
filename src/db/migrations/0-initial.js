export const up = async (knex) => {
  await knex.schema.createTable('table', (table) => {
    table.increments('id');
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable('table');
};

import knex from 'knex';

import config from 'src/db/config';

const rollback = async () => {
  const client = knex(config);

  await client.migrate.rollback();

  process.exit(0);
};

rollback();

import knex from 'knex';

import config from 'src/db/config';

const migrate = async () => {
  const client = knex(config);

  await client.migrate.latest();

  process.exit(0);
};

migrate();

import client from 'src/db/client';

const rollback = async () => {
  await client().migrate.latest();

  process.exit(0);
};

rollback();

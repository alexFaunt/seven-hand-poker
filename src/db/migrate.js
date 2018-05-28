import client from 'src/db/client';

const migrate = async () => {
  await client().migrate.latest();

  process.exit(0);
};

migrate();

import client from 'src/db/client';

const execute = (task) => {
  switch (task) {
    case 'migrate':
      return client().migrate.latest();
    case 'rollback':
      return client().migrate.rollback();
    case 'seed':
      return client().seed.run();
    default:
      throw new Error('Unknown db task');
  }
};

const run = async (task) => {
  try {
    await execute(task);
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

run(...process.argv.slice(2));

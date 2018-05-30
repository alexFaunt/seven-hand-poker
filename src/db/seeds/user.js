export async function seed(knex) {
  await knex('users').del();
  await knex('users').insert([
    { nickname: 'user-1' },
    { nickname: 'user-2' },
    { nickname: 'user-3' },
  ]);
}

export async function seed(knex) {
  await knex('reasons').insert([
    { id: 1, reason: 'too long' },
    { id: 2, reason: 'too short' },
    { id: 3, reason: 'too naughty' },
  ])
}

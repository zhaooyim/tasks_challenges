export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('vehicles').del()
  await knex('owners').del()
}

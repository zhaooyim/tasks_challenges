export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('students_teachers').del()
  await knex('students').del()
  await knex('teachers').del()
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'vaccuum the driveway', completed: true },
    { id: 2, task: 'remove bugs from garage', completed: false },
    { id: 3, task: 'ask insects to leave', completed: false },
  ])
}

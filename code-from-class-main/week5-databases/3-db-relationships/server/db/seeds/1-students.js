export async function seed(knex) {
  await knex('students').insert([
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Alicia ' },
    { id: 3, name: 'Dean' },
  ])
}

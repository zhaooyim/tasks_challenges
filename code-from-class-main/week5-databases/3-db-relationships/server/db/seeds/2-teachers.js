export async function seed(knex) {
  await knex('teachers').insert([
    { id: 1, name: 'Jared' },
    { id: 2, name: 'Hannah ' },
    { id: 3, name: 'Daph' },
  ])
}

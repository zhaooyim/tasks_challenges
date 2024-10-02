/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('owners').insert([
    { id: 101, name: 'Michael Knight', date_of_birth: '9/1/1949', address: 'Los Angeles' },
    { id: 102, name: 'Mr T', date_of_birth: '21/5/1952', address: 'Chicago' },
    { id: 103, name: 'Ms Frizzle', date_of_birth: '2/2/1986', address: 'Walkerville' },
    { id: 104, name: 'Batman', date_of_birth: '17/4/1915', address: 'Gotham City' },
    { id: 105, name: 'Emmett Brown', date_of_birth: '1/4/1901', address: 'Hill Valley' },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('vehicles').insert([
    { id: 201, owner_id: 102, make: 'GMC', model: 'Vandura', year: 1979 },
    { id: 202, owner_id: 103, make: 'Magic', model: 'School Bus', year: 1986 },
    { id: 203, owner_id: 104, make: 'Batmobile', model: 'Batmobile ', year: 1966 },
    { id: 204, owner_id: 104, make: 'Batmobile', model: 'Tumbler', year: 2005 },
    { id: 205, owner_id: 101, make: 'Knight Industries', model: 'Two Thousand', year: 1982 },
  ])
}

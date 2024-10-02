/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments('id').primary()
    table.string('owner_id').references('owners.id')
    table.string('make')
    table.string('model')
    table.integer('year')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('vehicles')
}

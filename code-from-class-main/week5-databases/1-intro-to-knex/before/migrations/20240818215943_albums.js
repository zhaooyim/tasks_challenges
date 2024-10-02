/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('albums', (table) => {
    table.increments('id')
    table.string('title')
    table.string('artist')
    table.boolean('is_favorite')
    table.integer('stock_level')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('albums')
};

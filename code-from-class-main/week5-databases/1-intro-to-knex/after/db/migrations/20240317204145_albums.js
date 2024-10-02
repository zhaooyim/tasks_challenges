export function up(knex) {
  return knex.schema.createTable('albums', (table) => {
    table.increments('id')
    table.string('title')
    table.string('artist')
    table.integer('stock_level')
    table.boolean('is_favorite')
  })
}

export function down(knex) {
  return knex.schema.dropTable('albums')
}

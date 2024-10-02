export const up = function (knex) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('id').primary()
    table.string('name')
  })
}

export const down = function (knex) {
  return knex.schema.dropTable('teachers')
}

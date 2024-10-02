export const up = function (knex) {
  return knex.schema.createTable('students', (table) => {
    table.increments('id').primary()
    table.string('name')
  })
}

export const down = function (knex) {
  return knex.schema.dropTable('students')
}

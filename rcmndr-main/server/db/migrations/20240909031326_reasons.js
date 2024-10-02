export async function up(knex) {
  return knex.schema.createTable('reasons', (table) => {
    table.increments('id')
    table.string('reason')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('reasons')
}

export async function up(knex) {
  return knex.schema.createTable('reports', (table) => {
    table.increments('id').primary()
    table.integer('created_on') // ticket #18 may need this to be renamed 'reported_on'
    table.string('reported_by').references('users.auth0_id')
    table.integer('reason_id').references('reasons.id')
    table.boolean('is_processed')
    table.integer('song_id').references('songs.id')
    table.integer('moderator_id').references('users.auth0_id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('reports')
}

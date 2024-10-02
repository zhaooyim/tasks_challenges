export async function up(knex) {
  await knex.schema.createTable('songs', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id').notNullable()
    table.string('title').notNullable()
    table.string('artist').notNullable()
    table.string('genre')
    table.string('link')
    table.string('description')
    table.boolean('is_banned')
    table.boolean('is_explicit')
    table.index(['user_id', 'genre'], 'idx_user_id_genre', {
      indexType: 'FULLTEXT',
      storageEngineIndexType: 'hash',
    })
  })
}

export async function down(knex) {
  return knex.schema.dropTable('songs')
}

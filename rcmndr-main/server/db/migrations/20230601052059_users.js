export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('email').primary()
    table.string('nickname').notNullable().unique()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.boolean('public')
    table.boolean('show_explicit_content')
    table.index(
      ['auth0_id', 'nickname', 'first_name', 'last_name', 'public'],
      'idx_auth0_id_user_info',
      {
        indexType: 'FULLTEXT',
        storageEngineIndexType: 'hash',
      }
    )
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}

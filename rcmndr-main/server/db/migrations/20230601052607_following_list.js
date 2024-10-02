export async function up(knex) {
  await knex.schema.createTable('following_list', (table) => {
    // this is a composite primary key
    table.primary(['user_id', 'following_id'])
    table.string('user_id').references('users.auth0_id').notNullable()
    table.string('following_id').references('users.auth0_id').notNullable()
    table.index(['user_id', 'following_id'], 'idx_user_id_following_id', {
      indexType: 'FULLTEXT',
      storageEngineIndexType: 'hash',
    })
  })
}

export async function down(knex) {
  await knex.schema.dropTable('following_list')
}

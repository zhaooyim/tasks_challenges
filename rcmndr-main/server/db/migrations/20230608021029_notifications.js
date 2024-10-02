export async function up(knex) {
  return knex.schema.createTable('notifications', (table) => {
    table.increments('id').primary()
    table.string('receiver_id').references('users.auth0_id') // the user who is receiving the notification
    table.string('sender_id').references('users.auth0_id') // the user who is sending the notification
    table.string('message')
    table.boolean('is_read')
    table.integer('timestamp') // the time the notification was sent
    table.index(
      ['receiver_id', 'sender_id', 'is_read', 'timestamp'],
      'idx_receiver_id_notification_info',
      {
        indexType: 'FULLTEXT',
        storageEngineIndexType: 'hash',
      }
    )
  })
}

export async function down(knex) {
  return knex.schema.dropTable('notifications')
}

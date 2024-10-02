export async function seed(knex) {
  await knex('reports').insert([
    {
      id: 1,
      created_on: Math.floor(Date.now() / 1000),
      reported_by: 'auth0|648fd1c873375442becf2c60', // Daph
      reason_id: 3,
      is_processed: false,
      song_id: 1,
      moderator_id: 'auth0|660378edb31104047fb75156', // Moderator
    },
  ])
}

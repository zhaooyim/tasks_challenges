export async function seed(knex) {
  await knex('following_list').insert([
    {
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      following_id: 'auth0|648fd1c873375442becf2c60',
    },
    {
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      following_id: 'auth0|649024f773375442becf3102',
    },
    {
      user_id: 'auth0|649024f773375442becf3102',
      following_id: 'auth0|6490255b0c2119ef3db1e4aa',
    },
    {
      user_id: 'auth0|649024f773375442becf3102',
      following_id: 'auth0|648fd1c873375442becf2c60',
    },
    {
      user_id: 'auth0|6490255b0c2119ef3db1e4aa',
      following_id: 'auth0|649025b96ef896963ad50b3f',
    },
  ])
}

export async function seed(knex) {
  await knex('notifications').insert([
    {
      receiver_id: 'auth0|6478f3fd75374ee3d7bc4d94', // Jared
      sender_id: 'auth0|648fd1c873375442becf2c60', // Daph
      message: 'Daph started following you!',
      is_read: false,
      timestamp: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
    },
    {
      receiver_id: 'auth0|648fd1c873375442becf2c60', // Daph
      sender_id: 'auth0|649024f773375442becf3102', // Prue
      message: 'Prue started following you!',
      is_read: true,
      timestamp: Math.floor(Date.now() / 1000) - 172800, // 2 days ago
    },
    {
      receiver_id: 'auth0|649024f773375442becf3102', // Prue
      sender_id: 'auth0|6490255b0c2119ef3db1e4aa', // Hannah
      message: 'Hannah started following you!',
      is_read: false,
      timestamp: Math.floor(Date.now() / 1000) - 3600, // 1 hour ago
    },
    {
      receiver_id: 'auth0|6490255b0c2119ef3db1e4aa', // Hannah
      sender_id: 'auth0|649025b96ef896963ad50b3f', // Rich
      message: 'Rich started following you!',
      is_read: false,
      timestamp: Math.floor(Date.now() / 1000) - 7200, // 2 hours ago
    },
    {
      receiver_id: 'auth0|649025b96ef896963ad50b3f', // Rich
      sender_id: 'auth0|660378edb31104047fb75156', // Moderator
      message: 'Moderator started following you!',
      is_read: true,
      timestamp: Math.floor(Date.now() / 1000) - 259200, // 3 days ago
    },
    {
      receiver_id: 'auth0|660378edb31104047fb75156', // Moderator
      sender_id: 'auth0|xxx123', // Ahmad
      message: 'Ahmad started following you!',
      is_read: false,
      timestamp: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
    },
    {
      receiver_id: 'auth0|xxx123', // Ahmad
      sender_id: 'auth0|foo123', // Gaby
      message: 'Gaby started following you!',
      is_read: false,
      timestamp: Math.floor(Date.now() / 1000), // now
    },
  ])
}

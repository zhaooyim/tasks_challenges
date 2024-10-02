//this is a function which builds our database connection
import knex from 'knex'

//our db config. It's an object
import config from './knexfile.js'

//which property of the config object we'll use. Defaults to development
const env = process.env.NODE_ENV || 'development'

//we create our db connection by running the knex function and giving it the value of the
const connection = knex(config[env])

export default connection
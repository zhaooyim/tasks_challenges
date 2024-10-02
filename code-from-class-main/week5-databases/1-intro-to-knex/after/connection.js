//this is a function which builds our database connection
import knex from 'knex'
//our db config. It's an object
import config from './knexfile.js'
//we create our db connection by running the knex function and giving it the value of the
//development property of the config object
const env = process.env.NODE_ENV || 'development'

const connection = knex(config[env])

export default connection

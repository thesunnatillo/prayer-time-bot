const { Pool } = require('pg')
require('dotenv').config()

module.exports = new Pool({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    // ssl: {
    //     rejectUnauthorized: false,
    // },
});
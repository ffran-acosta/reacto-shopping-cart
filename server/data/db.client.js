const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shopping_cart_react',
    password: 'postgres',
    port: 5432
})

module.exports = pool
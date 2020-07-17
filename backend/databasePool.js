const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const proConfig = {
    connectionString: process.env.DATABASE_URL
}

const pool = new Pool(process.env.NODE_ENV ==="production" ? proConfig : databaseConfiguration);

module.exports = pool;

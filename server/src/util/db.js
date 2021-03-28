const mysql = require('mysql2/promise');

// config for DB connection
module.exports = async function getDatabase(){
    const config = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'merkle_registration',
        dateStrings: 'true'
    }

    const connection = await mysql.createConnection(config);
    return connection
}


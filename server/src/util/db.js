const mysql = require('mysql2/promise');
const aws = require('aws-sdk');
// config for DB connection
module.exports = async function getDatabase(){
    aws.config.update({region:'us-east-2'});
    const ssm = new aws.SSM();
    const params = {
        Names: ['/merkle_reg/db_pass',
            '/merkle_reg/db_name'
        ],
        WithDecryption: true
    }
    const secrets = await ssm.getParameters(params).promise();
    
    const config = {

        host: secrets.Parameters.find(obj => obj.Name == '/merkle_reg/db_name').Value,
        user: 'admin',
        password: secrets.Parameters.find(obj => obj.Name == '/merkle_reg/db_pass').Value,
        database: 'merkle_registration',
        dateStrings: 'true'
    }

    const connection = await mysql.createConnection(config);
    return connection
}


const getDatabase = require('../util/db');

module.exports.post = async function(req, res) {
    try {
        const db = await getDatabase();
        await db.query(`
            INSERT INTO user 
            (first_name, last_name, address_one, address_two, city, state, zip, 
                country)
            VALUES(?,?,?,?,?,?,?,?) 
        `, [req.body.firstName, req.body.lastName, req.body.address_one, 
            req.body.address_two, req.body.city, req.body.state, req.body.zip, 
            req.body.country])
        await db.end();
        res.status(200).json({ message: 'success!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'internal server error'});
    }
    
}

module.exports.get = async function(req, res) {
    try{
        const db = await getDatabase();
        const [users] = await db.query(`
            SELECT * FROM merkle_registration.user
        `)
        console.log(users)
        await db.end();
        res.status(200).json({ message: 'success!', data: users});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'internal server error'});
    }
}
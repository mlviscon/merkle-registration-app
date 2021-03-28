const getDatabase = require('../util/db');

module.exports.post = async function(req, res) {
    let db;
    try {
        db = await getDatabase();
        await db.query(`
            INSERT INTO user 
            (first_name, last_name, address_one, address_two, city, state, zip, 
                country)
            VALUES(?,?,?,?,?,?,?,?) 
        `, [req.body.firstName, req.body.lastName, req.body.addressOne, 
            req.body.addressTwo, req.body.city, req.body.state, req.body.zip, 
            req.body.country])
        await db.end();
        res.status(200).json({ message: 'success!'});
    } catch (error) {
        console.error(error);
        if (db) { await db.end(); }
        res.status(500).json({ message: 'internal server error'});
    }
    
}

module.exports.get = async function(req, res) {
    let db;
    try{
        let order = 'DESC';
        let orderByString = '';
        db = await getDatabase();

        if (req.query.orderBy) {
            if (req.query.orderBy == 'registration_date'){
                orderByString += ` ORDER BY date`
            }
            if(req.query.order) {
                if (req.query.order == 'asc'){
                    order = 'ASC'
                }
            }
            orderByString += ` ${order}`
        }

        const [users] = await db.query(`
            SELECT * FROM merkle_registration.user
            ${orderByString}
        `)
        await db.end();
        res.status(200).json({ message: 'success!', data: users});
    } catch (error) {
        console.error(error);
        if (db) { await db.end(); }
        res.status(500).json({ message: 'internal server error'});
    }
}
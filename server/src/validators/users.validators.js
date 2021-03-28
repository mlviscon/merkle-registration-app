const validator = require('validator')

module.exports.post = async function(req, res, next) {
    try {
        // TODO check if number
        if (isNaN(req.body.zip) || !req.body.zip || (req.body.zip.length != 5 && req.body.zip.length != 9)){
            throw Error('invalid zip code')
        }
        if (req.body.firstName == undefined) {
            throw Error('invalid first name')
        }
        if (req.body.lastName == undefined) {
            throw Error('invalid last name')
        }
        if (req.body.addressOne == undefined) {
            throw Error('invalid address')
        }
        if (req.body.city == undefined) {
            throw Error('invalid city')
        }
        if (req.body.state == undefined) {
            throw Error('invalid state')
        }
        if (req.body.country.toUpperCase() != 'US') {
            throw Error('only US is accepted for country')
        }
        next();
    } catch (error) {
        if(error.message) {
            res.status(400).json( { message: error.message })
        } else {
            res.status(400).json( { message: "invalid form format"})
        }
    }

}
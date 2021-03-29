const validator = require('validator')

module.exports.post = async function(req, res, next) {
    try {
        const stateAbbreviations = [
        'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
        'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
        'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
        'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
        'VT','VI','VA','WA','WV','WI','WY'
        ];

        if (!new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(req.body.zip) ) {
            throw Error('invalid zip')
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
        if (req.body.state == undefined || !stateAbbreviations.includes(req.body.state.toUpperCase())) {
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
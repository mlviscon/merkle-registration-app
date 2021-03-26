const express = require('express');
const router = express.Router();


router.use('/users', require('./users.routes'))

// router.get('/test', function(req, res){
//     console.log("test");
//     res.status(200).json({ message: "success!"});
// })

module.exports = router;
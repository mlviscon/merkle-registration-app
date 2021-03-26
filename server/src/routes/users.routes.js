const express = require('express');
const router = express.Router();

router.post('/', require('../controllers/users').post);
router.get('/', require('../controllers/users').get);

// router.get('/:userID', require('../controllers/users').getById);

module.exports = router;
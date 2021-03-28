const express = require('express');
const userValidator = require('../validators/users.validators')
const router = express.Router();

router.post('/', userValidator.post, require('../controllers/users').post);
router.get('/', require('../controllers/users').get);

// router.get('/:userID', require('../controllers/users').getById);

module.exports = router;
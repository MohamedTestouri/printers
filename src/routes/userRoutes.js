const express = require('express');
const router = express.Router();

const {login, register} = require('../functions/userFunction');

router.post('/login', login);
router.post('/register', register);

module.exports = router;
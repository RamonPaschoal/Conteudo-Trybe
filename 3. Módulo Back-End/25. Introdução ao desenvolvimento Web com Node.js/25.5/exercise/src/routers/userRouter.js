const express = require('express');
const { validateRegister, validateLogin } = require('../middlewares/userMiddleware');
const user = require('../controllers/userControllers');
const rescue = require('express-rescue');

const router = express.Router();

router.post('/register', validateRegister, rescue(user.register));

router.post('/login', validateLogin, rescue(user.login));

module.exports = router;

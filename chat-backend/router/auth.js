const { login, register } = require('../controllers/authController');
const {validate} = require('../validator');
const {rules:registrationRules} = require('../validator/auth/register')
const {rules:loginRules} =require('../validator/auth/login')
const router = require('express').Router()

router.post('/login',[loginRules,validate],login)
router.post('/register',[registrationRules,validate],register)

module.exports = router;

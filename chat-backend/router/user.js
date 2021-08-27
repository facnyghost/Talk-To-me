const {update} = require('../controllers/userController')
const {validate} = require('../validator');
const {rules:updateRules} = require('../validator/user/update')
const {auth} = require('../middleware/auth')
const {userFile} = require('../middleware/fileUpload')
const router = require('express').Router()

router.post('/update',[auth,userFile,updateRules],update)

module.exports = router;

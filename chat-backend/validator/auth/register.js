const {body} =require('express-validator')

exports.rules = (() =>{
    return[
        body('firstname').notEmpty(),
        body('lastname').notEmpty(),
        body('email').isEmail(),
        body('password').isLength({min:8})
    ]
})()
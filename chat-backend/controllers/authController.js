const User = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('../config/app')


exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (!user) return res.status(404).json({ error: 'User not found!' })

        if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: 'Incorrect Password!' })

        const userWithToken = generateToken(user.get({ raw: true }))
        userWithToken.user.avatar = user.avatar

        return res.send(userWithToken)
    }
    catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        const userWithToken = generateToken(user.get({ raw: true }))
        return res.send(userWithToken)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}
const generateToken = (user) => {
    delete user.password

    const token = jwt.sign(user, config.appkey, { expiresIn: '8h' })
    return { ...{ user }, ...{ token } }
}
const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const gravatar = require('gravatar')
const path = require('path')
const fs = require('fs/promises')

const avatarsDir = path.join(__dirname, '../../', 'public/avatars')

const signup = async(req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        massage: 'Email in use'
      })
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    const defaultAvatar = gravatar.url(email, { protocol: 'https', s: '250' })
    const result = await User.create({ email, password: hashPassword, avatarURL: defaultAvatar })

    const userId = result._id.toString()
    const pathDir = path.join(avatarsDir, userId)
    await fs.mkdir(pathDir)

    res.status(201).json({
      status: 'success',
      code: 201,
      massage: 'Register success',
      user: {
        email: result.email,
        subscription: result.subscription
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = signup

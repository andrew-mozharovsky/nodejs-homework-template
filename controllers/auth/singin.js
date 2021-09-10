const { User } = require('../../models')
const jwt = require('jsonwebtoken')

const singin = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user || !user.comparePassword(password)) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        massage: 'Email or password is wrong'
      })
    }
    const payload = {
      id: user._id
    }
    const { SECRET_KEY } = process.env
    const token = jwt.sign(payload, SECRET_KEY)
    await User.findByIdAndUpdate(user._id, { token })
    res.json({
      token
    })
  } catch (error) {
    next(error)
  }
}

module.exports = singin

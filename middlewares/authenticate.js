const { User } = require('../models/user')

const authenticate = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ')

    if (bearer !== 'Bearer') {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Not authorized'
      })
    }

    const user = await User.findOne({ token })

    if (!user) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Not authorized'
      })
    }
    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authenticate

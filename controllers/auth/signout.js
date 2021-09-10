const { User } = require('../../models')

const signout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { token: null })
    res.status(204)
  } catch (error) {
    next(error)
  }
}

module.exports = signout

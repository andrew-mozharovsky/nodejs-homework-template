const { User } = require('../../models')

const verify = async(req, res, next) => {
  try {
    const { verificationToken } = req.params
    const user = await User.findOne({ verifyToken: verificationToken })
    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'User not found'
      })
    }
    await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null }, { new: true })
    res.send('<p>Your email verified</p>')
  } catch (error) {
    next(error)
  }
}

module.exports = verify

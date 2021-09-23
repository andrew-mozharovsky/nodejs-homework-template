
const { User } = require('../../models')
const { sendMail } = require('../../utils')

const resend = async(req, res, next) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'User email not found'
      })
    }

    if (!user.verify) {
      const toEmailObj = {
        to: email,
        subject: 'Подтверждение регистрации',
        html: `<a href="http://localhost:3030/api/auth/users/verify/${user.verifyToken}">Регистрация</a>`
      }

      await sendMail(toEmailObj)

      return res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Verification email sent'
      })
    }

    res.status(400).json({
      status: 'Bad Request',
      code: 400,
      message: 'Verification has already been passed'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = resend

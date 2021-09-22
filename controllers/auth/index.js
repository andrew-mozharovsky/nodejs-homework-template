const signup = require('./signup')
const singin = require('./singin')
const signout = require('./signout')
const getCurrentUser = require('./getCurrentUser')
const updateAvatar = require('./updateAvatar')
const verify = require('./verify')
const resend = require('./resend')

module.exports = {
  signup,
  singin,
  signout,
  getCurrentUser,
  updateAvatar,
  verify,
  resend
}

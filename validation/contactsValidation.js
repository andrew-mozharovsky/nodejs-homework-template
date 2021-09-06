const Joi = require('joi')

const joiContactsValidation = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  // eslint-disable-next-line prefer-regex-literals
  phone: Joi.string().pattern(new RegExp('^[0-9]{6,12}$')).required()
})

module.exports = joiContactsValidation

const { Schema, model } = require('mongoose')
const Joi = require('joi')

const contactsSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: [true, 'Set email'],
    },
    phone: {
      type: String,
      required: [true, 'Set phone number'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }
  }, { versionKey: false, timestamps: true }
)

const joiContactsValidationSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  // eslint-disable-next-line prefer-regex-literals
  phone: Joi.string().pattern(new RegExp('^[0-9]{6,12}$')).required(),
  favorite: Joi.boolean().default(false),
})

const Contact = model('contact', contactsSchema)

module.exports = {
  Contact,
  joiContactsValidationSchema
}

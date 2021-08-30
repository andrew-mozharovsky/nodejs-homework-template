const { addContact } = require('../../model')
const { joiContactsValidation } = require('../../validation')

const addNewContact = async (req, res, next) => {
  try {
    const nweContactObj = req.body
    const { error } = joiContactsValidation.validate(nweContactObj)
    if (error) {
      return res.status(400).json({
        message: 'missing required name field'
      })
    }
    const newContact = await addContact(nweContactObj)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result: newContact,
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addNewContact

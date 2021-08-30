const { joiContactsValidation } = require('../../validation')
const { updateContact } = require('../../model')

const updateContactById = async (req, res, next) => {
  try {
    const nweContactObj = req.body
    const { error } = joiContactsValidation.validate(nweContactObj)
    if (error) {
      return res.status(400).json({
        message: 'missing required name field'
      })
    }
    const { contactId } = req.params
    const updatedContact = await updateContact(contactId, nweContactObj)
    if (!updatedContact) {
      return res.status(404).json({
        message: 'Not found'
      })
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: updatedContact,
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContactById

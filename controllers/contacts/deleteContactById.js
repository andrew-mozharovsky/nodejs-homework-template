const { removeContact } = require('../../model')

const deleteContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const deletedContact = await removeContact(contactId)
    if (!deletedContact) {
      return res.status(404).json({
        message: 'Not found'
      })
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: deletedContact,
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = deleteContactById

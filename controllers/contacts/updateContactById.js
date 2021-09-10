const { Contact } = require('../../models')

const updateContactById = async (req, res, next) => {
  try {
    const nweContactObj = req.body

    const { contactId } = req.params
    const updatedContact = await Contact.findByIdAndUpdate(contactId, nweContactObj, { new: true })
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

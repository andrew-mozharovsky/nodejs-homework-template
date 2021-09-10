const { Contact } = require('../../models')

const addNewContact = async (req, res, next) => {
  try {
    const nweContactObj = { ...req.body, owner: req.user._id }
    const newContact = await Contact.create(nweContactObj)
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

const { Contact } = require('../../models')

const getAll = async (req, res, next) => {
  try {
    const listAllContacts = await Contact.find({})
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: listAllContacts,
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll

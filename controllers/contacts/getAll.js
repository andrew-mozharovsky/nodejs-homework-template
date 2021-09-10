const { Contact } = require('../../models')

const getAll = async (req, res, next) => {
  try {
    const listAllContacts = await Contact.find({ owner: req.user._id }).populate('owner', '_id email subscription')
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

const { listContacts, } = require('../../model')

const getAll = async (req, res, next) => {
  try {
    const listAllContacts = await listContacts()
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

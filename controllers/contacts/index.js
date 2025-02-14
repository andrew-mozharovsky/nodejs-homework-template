const getAll = require('./getAll')
const getById = require('./getById')
const addNewContact = require('./addNewContact')
const updateContactById = require('./updateContactById')
const deleteContactById = require('./deleteContactById')
const updateFavorite = require('./updateFavorite')

module.exports = {
  getAll,
  getById,
  addNewContact,
  updateContactById,
  deleteContactById,
  updateFavorite
}

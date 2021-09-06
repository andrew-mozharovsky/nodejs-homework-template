const express = require('express')
const router = express.Router()
const { getAll, getById, addNewContact, updateContactById, deleteContactById } = require('../../controllers/contacts')

router.get('/', getAll)

router.get('/:contactId', getById)

router.post('/', addNewContact)

router.delete('/:contactId', deleteContactById)

router.put('/:contactId', updateContactById)

module.exports = router

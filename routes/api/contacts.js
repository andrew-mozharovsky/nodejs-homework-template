const express = require('express')
const router = express.Router()
const { joiContactsValidationSchema } = require('../../models/contact')
const { validation } = require('../../middlewares')
const { getAll, getById, addNewContact, updateContactById, deleteContactById, updateFavorite } = require('../../controllers/contacts')

const validstionMiddleware = validation(joiContactsValidationSchema)

router.get('/', getAll)

router.get('/:contactId', getById)

router.post('/', validstionMiddleware, addNewContact)

router.delete('/:contactId', deleteContactById)

router.put('/:contactId', validstionMiddleware, updateContactById)

router.patch('/:contactId/favorite', updateFavorite)

module.exports = router

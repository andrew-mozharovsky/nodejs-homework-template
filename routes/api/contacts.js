const express = require('express')
const router = express.Router()
const { joiContactsValidationSchema } = require('../../models/contact')
const { validation, authenticate } = require('../../middlewares')
const { getAll, getById, addNewContact, updateContactById, deleteContactById, updateFavorite } = require('../../controllers/contacts')

const validstionMiddleware = validation(joiContactsValidationSchema)

router.get('/', authenticate, getAll)

router.get('/:contactId', getById)

router.post('/', authenticate, validstionMiddleware, addNewContact)

router.delete('/:contactId', deleteContactById)

router.put('/:contactId', authenticate, validstionMiddleware, updateContactById)

router.patch('/:contactId/favorite', updateFavorite)

module.exports = router

const express = require('express')

const { validation, authenticate } = require('../../middlewares')
const { joiUserValidationSchema } = require('../../models/user')

const { signup, singin, signout, getCurrentUser } = require('../../controllers/auth')

const validstionMiddleware = validation(joiUserValidationSchema)

const router = express.Router()

router.post('/users/signup', validstionMiddleware, signup)

router.post('/users/signin', validstionMiddleware, singin)

router.get('/users/signout', authenticate, signout)

router.get('/users/current', authenticate, getCurrentUser)

module.exports = router

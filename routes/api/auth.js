const express = require('express')

const { validation, authenticate, upload } = require('../../middlewares')
const { joiUserValidationSchema } = require('../../models/user')

const { signup, singin, signout, getCurrentUser, updateAvatar } = require('../../controllers/auth')

const validstionMiddleware = validation(joiUserValidationSchema)

const router = express.Router()

router.post('/users/signup', validstionMiddleware, signup)

router.post('/users/signin', validstionMiddleware, singin)

router.get('/users/signout', authenticate, signout)

router.get('/users/current', authenticate, getCurrentUser)

router.patch('/users/avatars', authenticate, upload.single('avatarURL'), updateAvatar)

module.exports = router

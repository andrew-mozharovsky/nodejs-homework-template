const express = require('express')

const { validation, authenticate, upload } = require('../../middlewares')
const { joiUserValidationSchema, joiUserEmailValidationSchema } = require('../../models/user')

const { signup, singin, signout, getCurrentUser, updateAvatar, verify, resend } = require('../../controllers/auth')

const validstionMiddleware = validation(joiUserValidationSchema)
const validstionVerifyEmailMiddleware = validation(joiUserEmailValidationSchema)

const router = express.Router()

router.post('/users/signup', validstionMiddleware, signup)

router.post('/users/signin', validstionMiddleware, singin)

router.get('/users/signout', authenticate, signout)

router.get('/users/current', authenticate, getCurrentUser)

router.patch('/users/avatars', authenticate, upload.single('avatarURL'), updateAvatar)

router.get('/users/verify/:verificationToken', verify)

router.post('/users/verify', validstionVerifyEmailMiddleware, resend)

module.exports = router

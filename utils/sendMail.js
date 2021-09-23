const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_PASSWORD } = process.env

const nodemailerConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'kainnet.job@gmail.com',
    pass: EMAIL_PASSWORD
  }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendMail = async(data) => {
  try {
    const email = { ...data, from: 'kainnet.job@gmail.com' }
    await transporter.sendMail(email)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = sendMail

const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')
const { User } = require('../../models/user')

const avatarsDir = path.join(__dirname, '../../', 'public/avatars')

const updateAvatar = async(req, res, next) => {
  try {
    const userId = req.user._id
    const userIdString = userId.toString()
    const { path: tmpPath, originalname } = req.file
    const dirPath = path.join(avatarsDir, userIdString, originalname)
    try {
      const file = await Jimp.read(tmpPath)
      await file.resize(250, 250).write(tmpPath)
      await fs.rename(tmpPath, dirPath)
      const avatarURL = `/avatars/${userIdString}/${originalname}`

      await User.findByIdAndUpdate(userId, { avatarURL }, { new: true })
      res.status(200).json({
        status: 'success',
        code: 200,
        data: {
          result: avatarURL,

        }
      })
    } catch (error) {
      await fs.unlink(tmpPath)
      throw error
    }
  } catch (error) {
    next(error)
  }
}

module.exports = updateAvatar

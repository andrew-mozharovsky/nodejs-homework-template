const { Contact } = require('../../models')

const updateFavorite = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const { favorite } = req.body

    if (!favorite) {
      return res.status(400).json({
        message: 'missing field favorite'
      })
    }

    const updatedContactFavorite = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })
    if (!updatedContactFavorite) {
      return res.status(404).json({
        message: 'Not found'
      })
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: updatedContactFavorite,
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateFavorite

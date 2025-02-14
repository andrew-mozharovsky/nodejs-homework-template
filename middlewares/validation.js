const validation = (schema) => {
  const validationFunc = async (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.message
      })
    }
    next()
  }
  return validationFunc
}

module.exports = validation

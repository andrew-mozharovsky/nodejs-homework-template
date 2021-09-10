const getCurrentUser = async (req, res, next) => {
  try {
    const currentUser = req.user
    res.json({
      status: 'success',
      code: 200,
      data: {
        email: currentUser.email,
        subscription: currentUser.subscription
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getCurrentUser

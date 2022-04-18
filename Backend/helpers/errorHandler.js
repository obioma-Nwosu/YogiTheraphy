const errorHandler = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    // Jwt authentication error
    return res.status(401).json({message: "User not authenticated"})
  }
  if (err.name === 'ValidationError') {
    // validation error
    return res.status(401).json({message: err})
  }
  
  return res.status(500).json(err)
}

module.exports = errorHandler
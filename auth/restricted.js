

function authenticate() {
  return async (req, res, next) => {
    try {
      const token = req.headers.cookie
      if (!token) {
        return res.status(401).json({
          message: 'invalid auth credentials'
        })
      } else {
        next()
      }
           
    } catch(err) {
      console.log('Error: ', err)
    }
  }
}

module.exports = authenticate
var jwt = require('jsonwebtoken')

var user = function (req, res, next) {
  var token = req.headers.token
  if (!token) {
    res.send('You are not sign in yet')
  }
  let decode = jwt.verify(token, process.env.SECRET)
  if (decode) {
    next()
  } else {
    res.status(401).send('you are not authorized')
  }
}

var admin = function (req, res, next) {
  var token = req.headers.token
  if (!token) {
    res.send('not sign in yet')
  }
  let decode = jwt.verify(token, process.env.SECRET)
  if (decode && decode.user.role == 'admin') {
    next()
  } else {
    res.status(401).send('you are not authorized')
  }
}

module.exports = {
  admin,
  user
}

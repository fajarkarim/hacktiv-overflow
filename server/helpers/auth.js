var jwt = require('jsonwebtoken')
var db = require('../models')

var user = function (req, res, next) {  
  var token = req.headers.token
  if (!token) {
    res.send('You are not sign in yet')
  }
  let decode = jwt.verify(token, process.env.SECRET)
  if (decode) {
    res.locals.userID = decode.id
    next()
  } else {
    res.status(401).send('you are not authorized')
  }
}

var userQuestion = function (req, res, next) {
  var token = req.headers.token
  if (!token) {
    res.send('You are not sign in yet')
  }
  let decode = jwt.verify(token, process.env.SECRET)
  if (decode) {
    db.Question.findById(req.params.id)
    .then(question => {
      if (question.author == decode.id) {
        res.locals.userID = decode.id
        next()
      } else {
        res.status(403).send('its not yours')
      }
    })
    .catch(err => res.status(500).send(err))
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
  user,
  userQuestion
}

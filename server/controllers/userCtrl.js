
var db = require('../models')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var saltRounds = 10

var getAll = (req, res) => {
  db.User.findAll({
    include: [
      { model: db.Question },
      { model: db.Answer }
  ]
  })
  .then(users => {
    res.send(users)
  })
  .catch(err => {
    res.send(err)
  })
}

var getOne = (req, res) => {
  db.User.findById(req.params.id)
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var create = (req, res) => {
  db.User.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var edit = (req, res) => {
  db.User.findById(req.params.id)
  .then(user => {
    user.update(
      {
        name: req.body.name || user.name,
        email: req.body.email || user.email,
        role: req.body.role || user.role,
        username: req.body.username || user.username,
        password: req.body.password || user.password
      }
    )
    .then((user) => res.send(`${JSON.stringify(user)} updated`))
    .catch(err => res.send(err))
  })
  .catch(err => res.send(err))
}

var remove = (req, res) => {
  db.User.destroy({where : {id : req.params.id}})
  .then(user =>  {
    res.send(`${user} destroyed`)
  })
  .catch(err => {
    res.send(err)
  })
}

var register = (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, saltRounds)
  db.User.findOrCreate({
    where: {email: req.body.email},
    defaults: {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      username: req.body.username,
      password: hash
    }
  })
  .then(created => {
    let status = created[1]
    if (!status) {
      res.send("email already used")
    }
    res.send(created)
  })
  .catch(err => {
    res.send(err)
  })
}

var login = (req, res) => {
  db.User.findOne({ where: { email: req.body.email }})
  .then(user => {
    let pass = bcrypt.compareSync(req.body.password, user.password)
    if (pass) {
      var token = jwt.sign({
        name: user.name,
        username: user.username,
        role: user.role
      }, process.env.SECRET)
      res.send(token)
    }
    res.send('your pass is wrong')
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAll,
  getOne,
  edit,
  remove,
  register,
  login,
  create
}

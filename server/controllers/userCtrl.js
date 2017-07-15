
var db = require('../models')

var getAll = (req, res) => {
  db.User.findAll({
    include: [{
      model: db.Question
    }]
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
        username: req.body.username || user.username,
        password: req.body.password || user.password
      }
    )
    .then(() => res.send("user updated"))
    .catch(err => res.send(err))
  })
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



module.exports = {
  getAll,
  getOne,
  create,
  edit,
  remove
}

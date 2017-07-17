
var db = require('../models')

var getAll = (req, res) => {
  db.Answer.findAll({
    include: [{ model: db.AnswerVote }]
  })
  .then(answers => {
    res.send(answers)
  })
  .catch(err => {
    res.send(err)
  })
}

var getOne = (req, res) => {
  db.Answer.findById(req.params.id)
  .then(answer => {
    res.send(answer)
  })
  .catch(err => {
    res.send(err)
  })
}

var create = (req, res) => {
  db.Answer.create({
    author: req.body.author,
    content: req.body.content,
    answer_vote: req.body.a_vote
  })
  .then(answer => {
    res.send(answer)
  })
  .catch(err => {
    res.send(err)
  })
}

var edit = (req, res) => {
  db.Answer.findById(req.params.id)
  .then(answer => {
    answer.update(
      {
        author: req.body.author || answer.author,
        content: req.body.content || answer.content,
        answer: req.body.a_vote || answer.a_vote
      }
    )
    .then(() => res.send("user updated"))
    .catch(err => res.send(err))
  })
}

var remove = (req, res) => {
  db.Answer.destroy({where : {id : req.params.id}})
  .then(answer =>  {
    res.send(`${answer} destroyed`)
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

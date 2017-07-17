
var db = require('../models')

var getAll = (req, res) => {
  db.Question.findAll({
    include: [
      { model: db.QuestionVote },
      {
        model: db.Answer, include: [{ model: db.AnswerVote }]
      }
    ]
  })
  .then(questions => {
    res.send(questions)
  })
  .catch(err => {
    res.send(err)
  })
}

var getOne = (req, res) => {
  db.Question.findById(req.params.id)
  .then(question => {
    res.send(question)
  })
  .catch(err => {
    res.send(err)
  })
}

var create = (req, res) => {
  db.Question.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  })
  .then(question => {
    res.send(question)
  })
  .catch(err => {
    res.send(err)
  })
}

var edit = (req, res) => {
  db.Question.findById(req.params.id)
  .then(question => {
    question.update(
      {
        title: req.body.title || question.title,
        content: req.body.content || question.content,
        author: req.body.author || question.author,
      }
    )
    .then(() => res.send("user updated"))
    .catch(err => res.send(err))
  })
}

var remove = (req, res) => {
  db.Question.destroy({where : {id : req.params.id}})
  .then(question =>  {
    res.send(`${question} destroyed`)
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

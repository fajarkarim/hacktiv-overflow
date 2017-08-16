
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
  console.log(`----- masuk server create ${res.locals.userID}`);
  db.Answer.create({
    author: res.locals.userID,
    content: req.body.content,
    QuestionId: req.body.question_id
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
        author: res.locals.userID || answer.author,
        content: req.body.content || answer.content,
      }
    )
    .then(() => res.send("user updated"))
    .catch(err => res.send(err))
  })
  .catch(err => {
    res.status(500).send(err)
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

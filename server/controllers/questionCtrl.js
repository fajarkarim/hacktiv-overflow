
var db = require('../models')

var getAll = (req, res) => {
  console.log(res.locals.userID)
  db.Question.findAll({
    include: [
      { model: db.User, attributes: ['name'] },
      { model: db.QuestionVote, attributes: ['voter', 'type'] },
      {
        model: db.Answer, attributes: ['content'] ,include: [
          {
            model: db.AnswerVote, attributes: ['voter', 'type'],
            include: [{ model: db.User, attributes: ['name']}]
          },
          {
            model: db.User, attributes: ['name']
          },
        ]
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
  db.Question.findOne(
    {
      where: { id: req.params.id },
      include: [
        { model: db.User, attributes: ['name']},
        { model: db.QuestionVote, attributes: ['id', 'voter', 'type'] },
        {
          model: db.Answer, attributes: ['id','content'] ,include: [
            {
              model: db.AnswerVote, attributes: ['id', 'voter', 'type'],
              include: [{ model: db.User, attributes: ['name']}]
            },
            {
              model: db.User, attributes: ['name']
            },
          ]
        }
      ]
    }
  )
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
    author: res.locals.userID
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
        author: res.locals.userID || question.author,
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

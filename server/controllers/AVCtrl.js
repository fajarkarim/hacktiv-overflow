
var db = require('../models')

var create = (req, res) => {
  db.AnswerVote.findOrCreate({
    where: { voter: req.body.voter_id },
    defaults: {
      type: req.body.type,
      voter: res.locals.userID,
      AnswerId: req.body.answer_id
    }
  })
  .then(answer => {
    res.send(answer)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}
//
var edit = (req, res) => {
  db.AnswerVote.findById(req.params.id)
  .then(qa => {
    qa.update(
      {
        type: req.body.type || qa.type,
        AnswerId: req.body.answer_id || qa.id
      }
    )
    .then(() => res.send(`changed to ${req.body.type}`))
    .catch(err => res.send(err))
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  create,
  edit
}

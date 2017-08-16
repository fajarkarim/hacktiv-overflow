
var db = require('../models')

var create = (req, res) => {
  db.QuestionVote.findOrCreate({
    where: { voter: req.body.voter_id },
    defaults: {
      type: req.body.type,
      voter: res.locals.userID,
      QuestionId: req.body.question_id
    }
  })
  .then(created => {
    let found = created[1]
    let vote = created[0]
    if (!found) {
      res.send("question vote created")
    }
    res.send(vote)
  })
  .catch(err => {
    res.send(err)
  })
}
//
var edit = (req, res) => {
  db.QuestionVote.findById(req.params.id)
  .then(qv => {
    qv.update(
      {
        type: req.body.type || qv.type
        // QuestionId: req.body.question_id || qv.id
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

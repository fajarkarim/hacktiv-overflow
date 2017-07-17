var express = require('express');
var router = express.Router();
var answerCtrl = require('../controllers/answerCtrl')

/* GET users listing. */
router.get('/', answerCtrl.getAll);
router.get('/:id', answerCtrl.getOne);
router.post('/', answerCtrl.create);
router.put('/:id', answerCtrl.edit);
router.delete('/:id', answerCtrl.remove)

module.exports = router;

var express = require('express');
var router = express.Router();
var answerCtrl = require('../controllers/answerCtrl')
var auth = require('../helpers/auth')

/* GET users listing. */
router.get('/', answerCtrl.getAll);
router.get('/:id', answerCtrl.getOne);
router.post('/', auth.user, answerCtrl.create);
router.put('/:id', auth.user, answerCtrl.edit);
router.delete('/:id', auth.user, answerCtrl.remove)

module.exports = router;

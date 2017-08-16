var express = require('express');
var router = express.Router();
var questionCtrl = require('../controllers/questionCtrl')
var auth = require('../helpers/auth')

/* GET users listing. */
router.get('/', questionCtrl.getAll);
router.get('/:id', questionCtrl.getOne);
router.post('/', auth.user, questionCtrl.create);
router.put('/:id', auth.userQuestion, questionCtrl.edit);
router.delete('/:id', auth.userQuestion, questionCtrl.remove)

module.exports = router;

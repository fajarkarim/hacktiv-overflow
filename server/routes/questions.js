var express = require('express');
var router = express.Router();
var questionCtrl = require('../controllers/questionCtrl')

/* GET users listing. */
router.get('/', questionCtrl.getAll);
router.get('/:id', questionCtrl.getOne);
router.post('/', questionCtrl.create);
router.put('/:id', questionCtrl.edit);
router.delete('/:id', questionCtrl.remove)

module.exports = router;

var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl')

/* GET users listing. */
router.get('/', userCtrl.getAll);
router.get('/:id', userCtrl.getOne);
router.post('/', userCtrl.create);
router.put('/:id', userCtrl.edit);
router.delete('/:id', userCtrl.remove)

module.exports = router;

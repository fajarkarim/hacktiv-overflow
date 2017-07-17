var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl')
var auth = require('../helpers/auth')

/* GET users listing. */
router.get('/', userCtrl.getAll);
router.get('/:id', auth.user, userCtrl.getOne);
router.post('/login', userCtrl.login);
router.post('/register', userCtrl.register)
router.put('/:id', auth.user, userCtrl.edit);
router.delete('/:id', auth.admin, userCtrl.remove)

module.exports = router;

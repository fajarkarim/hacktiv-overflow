var express = require('express')
var router = express.Router()
var AVCtrl = require('../controllers/AVCtrl')
var auth = require('../helpers/auth')

router.post('/', auth.user, AVCtrl.create)
router.put('/:id', auth.user, AVCtrl.edit)

module.exports = router

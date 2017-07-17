var express = require('express')
var router = express.Router()
var QVCtrl = require('../controllers/QVCtrl')
var auth = require('../helpers/auth')

router.post('/', auth.user, QVCtrl.create)
router.put('/:id', auth.user, QVCtrl.edit)

module.exports = router

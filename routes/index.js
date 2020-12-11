const express = require('express')
const router = express.Router()
const show = require('./modules/show')
const home = require('./modules/home')
const guide = require('./modules/guide')

router.use('/', home)
router.use('/tinyURL', show)
router.use('/URL', guide)


module.exports = router
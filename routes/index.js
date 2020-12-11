const express = require('express')
const router = express.Router()
const show = require('./modules/show')
const home = require('./modules/home')

router.use('/', home)
router.use('/tinyURL', show)

module.exports = router
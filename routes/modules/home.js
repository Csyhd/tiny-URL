const express = require('express')
const router = express.Router()
// const Url = require('../../models/Urls')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
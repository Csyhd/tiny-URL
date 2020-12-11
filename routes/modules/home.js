const express = require('express')
const router = express.Router()
// const Url = require('../../models/Urls')

router.get('/', (req, res) => {
  res.render('index')
    .catch(error => console.log(error))
})

module.exports = router
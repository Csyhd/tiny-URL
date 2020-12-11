const express = require('express')
const router = express.Router()
// const Url = require('../../models/Urls')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Urls.findOne({ tinyURL: id })
    .then((url) => {
      const URL = url.URL
      res.location(URL)
    })

})

module.exports = router
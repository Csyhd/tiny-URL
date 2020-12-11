const express = require('express')
const router = express.Router()
const Urls = require('../../models/Urls')

router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  Urls.findOne({ tinyURL: id })
    .then((url) => {
      const URL = url.URL
      res.redirect(URL)
    })
    .catch(error => console.log(error))
})

module.exports = router
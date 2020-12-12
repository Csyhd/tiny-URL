const express = require('express')
const router = express.Router()
const Urls = require('../../models/Urls')

router.get('/:id', (req, res) => {
  const id = req.params.id//收到短網址id
  Urls.findOne({ tinyURL: id })//去資料庫搜尋此id的原始URL
    .then((url) => {
      const URL = url.URL
      res.redirect(URL) //重新定向URL
    })
    .catch(error => console.log(error))
})

module.exports = router
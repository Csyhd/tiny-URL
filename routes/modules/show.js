const express = require('express')
const router = express.Router()
const Urls = require('../../models/Urls')
const creatRandomNumber = require('../../public/javacsripts/transform')


router.post('/', (req, res) => {
  let URL = req.body.URL
  let randomNumbers = ''
  let creatURL = ''
  let status = true

  Urls.find()
    .then((urls) => {
      while (status) {
        randomNumbers = creatRandomNumber()
        status = urls.some((url) => {
          return url.randomNumbers === randomNumbers
        })
      }
    })
    .then(() => {
      creatURL = {
        URL,
        randomNumbers
      }
      return Urls.create(creatURL)
        .then(() => {
          res.render('show', { randomNumbers })
        })
    })
})

module.exports = router
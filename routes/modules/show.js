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
      while (status) { //判斷短網址是否重複
        randomNumbers = creatRandomNumber() //呼叫亂數產生函數
        status = urls.some((url) => { //比對亂數是否重複
          return url.randomNumbers === randomNumbers
        })
      }
    })
    .then(() => {
      creatURL = {
        URL,
        randomNumbers
      }
      return Urls.create(creatURL)// 把產生的資料丟進資料庫裡
        .then(() => {
          res.render('show', { randomNumbers })//render畫面
        })
    })
    .catch(error => console.log(error))
})

module.exports = router
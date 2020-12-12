const express = require('express')
const router = express.Router()
const Urls = require('../../models/Urls')
const creatRandomNumber = require('../../public/javacsripts/transform')


router.post('/', (req, res) => {
  let URL = req.body.URL
  let tinyURL = ''
  let creatURL = ''
  let status = true

  Urls.find()
    .then((urls) => {
      while (status) { //使用while迴圈狀態判斷短網址是否重複
        tinyURL = creatRandomNumber() //呼叫亂數產生函數
        status = urls.some((url) => { //比對亂數是否重複並且回傳狀態
          return url.randomNumbers === tinyURL
        })
      }
    })
    .then(() => {
      creatURL = {
        URL,
        tinyURL
      }
      return Urls.create(creatURL)// 把產生的資料丟進資料庫裡
        .then(() => {
          res.render('show', { creatURL })//render畫面
        })
    })
    .catch(error => console.log(error))
})

module.exports = router
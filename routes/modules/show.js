const express = require('express')
const router = express.Router()
const Urls = require('../../models/Urls')
const creatRandomNumber = require('../../public/javacsripts/transform')
const DOMAINS = process.env.HEROKU_DOMAINS //取得heroku domains



router.post('/', (req, res) => {

  let URL = req.body.URL.trim()
  if (URL !== '') { //判斷input是否有輸入值
    Urls.find()
      .then((urls) => {
        let tinyURL = creatRandomNumber() //呼叫亂數產生函數
        while (urls.some((url) => url.tinyURL === tinyURL)) { //使用while迴圈狀態判斷短網址是否重複
          tinyURL = creatRandomNumber()
        }
        return tinyURL
      })
      .then((tinyURL) => {
        return Urls.create({ URL, tinyURL })// 把產生的資料丟進資料庫裡
          .then(() => {
            res.render('show', { URL, tinyURL, DOMAINS })//render畫面
          })
      })
      .catch(error => console.log(error))
  } else { //如果沒有輸入及執行以下動作
    const isInvalid = 'is-invalid' //使用bootstrap提供的功能,在input插入is-invalid提示使用者
    res.render('index', { isInvalid })
  }
})

module.exports = router
const express = require('express')
const router = express.Router()
const Urls = require('../../models/Urls')
const creatRandomNumber = require('../../public/javacsripts/transform')



router.post('/', (req, res) => {

  let URL = req.body.URL
  if (URL !== '') { //判斷input是否有輸入值
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
  } else { //如果沒有輸入及執行以下動作
    const isInvalid = 'is-invalid' //使用bootstrap提供的功能,在input插入is-invalid提示使用者
    res.render('index', { isInvalid })
  }
})

module.exports = router
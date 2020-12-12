

function randomNumber(array) {  //根據傳進來的參數長度產生一個亂數
  return Math.floor(Math.random() * array.length)
}


function creatRandomNumber() { //產生短網址亂數組
  const model = {
    lowerCaseLetters: 'abcdefghijklmnopqrstuvwxyz',
    upperCaseLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890'
  }
  const box = [model.lowerCaseLetters, model.upperCaseLetters, model.numbers]

  let selectNumber = ''
  let selectTarget = []
  let splitString = []

  for (let i = 0; i < 5; i++) {
    selectTarget = box[randomNumber(box)] //隨機選擇要使用的參數型態
    splitString = selectTarget.split('') //切割所選擇的陣列
    selectNumber += splitString[randomNumber(splitString)] // 把參數丟進變數裡
  }

  return selectNumber //回傳亂數組
}

module.exports = creatRandomNumber





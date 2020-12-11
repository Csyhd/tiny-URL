

function randomNumber(array) {
  return Math.floor(Math.random() * array.length)
}


function creatRandomNumber() {
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
    selectTarget = box[randomNumber(box)]
    splitString = selectTarget.split('')
    selectNumber += splitString[randomNumber(splitString)]
  }

  return selectNumber
}

module.exports = creatRandomNumber





const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  URL: {
    type: String,
    required: true
  },
  tinyURL: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Urls', urlSchema)
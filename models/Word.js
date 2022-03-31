const mongoose = require('mongoose');
const { Schema } = mongoose;

const wordSchema = new Schema({
  tr: {
    type: String,
    required: true
  },
  en: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Word', wordSchema)


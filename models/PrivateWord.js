const mongoose = require('mongoose');
const { Schema } = mongoose;

const PrivateWord = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tr: {
    type: String,
    required: true
  },
  en: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('PrivateWord', PrivateWord)


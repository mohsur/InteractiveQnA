const mongoose = require('mongoose');

const qnaSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  feedback: {
    type: Number,
    default: 0
  }
});

const QnA = mongoose.model('QnA', qnaSchema);

module.exports = QnA;


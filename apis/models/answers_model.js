const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  answer: { type: String, required: true},
  correct_answer: {type: Boolean, default: false}
});

module.exports = mongoose.model("Answer", answerSchema);

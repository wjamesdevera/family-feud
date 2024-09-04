const mongoose = require("mongoose");

exports.questionSchema = mongoose.Schema({
  questionText: {
    type: mongoose.Schema.Types.String,
    unique: true,
    required: true,
  },
  answers: [],
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

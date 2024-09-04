const checkSchema = require("express-validator").checkSchema;

exports.createQuestionValidationSchema = checkSchema({
  questionText: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Question text required",
    },
    isString: {
      errorMessage: "Question text must be a string",
    },
    isLength: {
      options: { min: 5, max: 250 },
      errorMessage: "Question must be atleast 8 characters",
    },
  },
});

exports.deleteQuestionValidationSchema = checkSchema({
  id: {
    in: ["params"],
    isString: {
      errorMessage: "Id must be a string",
    },
  },
});

exports.updateQuestionValidationSchema = checkSchema({
  id: {
    in: ["params"],
    isString: {
      errorMessage: "Id must be a string",
    },
  },
  questionText: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Question text required",
    },
    isString: {
      errorMessage: "Question text must be a string",
    },
    isLength: {
      options: { min: 5, max: 250 },
      errorMessage: "Question must be atleast 8 characters",
    },
  },
});

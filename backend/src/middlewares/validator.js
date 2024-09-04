const express = require("express");
const { validationResult, matchedData } = require("express-validator");

exports.validate = (validations) => async (request, response) => {
  for (const validation of validations) {
    const result = await validation.run(req);
    if (!result.isEmpty())
      return response.status(400).json({ errors: result.array() });
    request.body = matchedData(req);
    next();
  }
};

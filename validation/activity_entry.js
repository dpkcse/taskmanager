const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateActivityEntryInput(data) {

  let errors = {};

  data.taskName = !isEmpty(data.taskName) ? data.taskName : '';

  if (Validator.isEmpty(data.taskName)) {
    errors.taskName = 'Task title is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

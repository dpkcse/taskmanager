const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateActivityEntryInput(data) {
  let errors = {};

  data.taskName = !isEmpty(data.taskName) ? data.taskName : '';
  data.priority = !isEmpty(data.priority) ? data.priority : '';
  data.startDate = !isEmpty(data.startDate) ? data.startDate : '';
  data.endDate = !isEmpty(data.endDate) ? data.endDate : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

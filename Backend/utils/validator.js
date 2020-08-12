const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

isNotFull = (string) => {
  if (string.length != 6) return true;
  else return false;
};
exports.validateRegister = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email address";
  }

  if (isEmpty(data.password)) errors.password = "Must not be empty";
  if (isEmpty(data.name)) errors.name = "Must not be empty";
  if (isEmpty(data.lastname)) errors.lastname = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLogin = (data) => {
  let errors = {};

  if (!isEmail(data.email)) errors.email = "Must be a valid email address";
  if (isEmpty(data.email)) errors.email = "Must not be empty";
  if (isEmpty(data.password)) errors.password = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.codeValidate = (data) => {
  let errors = {};

  if (isNotFull(data.code)) errors.code = "Must have 6 digits";
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

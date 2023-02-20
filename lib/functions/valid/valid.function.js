// ----------------------------------------------
// valid.function.js
// ----------------------------------------------
// Here we can validate the phone number.
// This is a simple RegEx and it works with numbers starts with +98, 090 and etc.

const isValidPhoneNumber = (value) => {
  const regex = new RegExp("^(\\+98|0)?9\\d{9}$");
  const result = regex.test(value);

  return result;
};

export default isValidPhoneNumber;

// ----------------------------------------------
// errors.function.js
// ----------------------------------------------
// Here is where you can see message by passing code.
// Like, say code 1 and get the message of one.

import { errorsConfig as errors } from "../../config/index.js";

const errorMessage = (code) => {
  return errors.find((error) => error.code === code).message;
};

export default errorMessage;

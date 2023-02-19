// ----------------------------------------------
// sms.services.js
// ----------------------------------------------
// PayamSMS endpoints callers.
// Here are where we call PayamSMS.
// In this case, we just have one endpoint.

import API from "../../api/index.js";

const createReq = (data) => {
  setTimeout(
    async (data) => {
      return await API.post("", data, { timeout: 5000 });
    },
    [2000]
  );
};

export const CALL_API = async (data) => {
  // ----------------------------------------------
  // CALL_API()
  // ----------------------------------------------
  // Call API is the caller of the main endpoint.
  // Or we can say the only endpoint :)
  // So, just pass the data that includes these items belo:
  // 1. Authentication.
  // 1.1. organization.
  // 1.2. username.
  // 1.3. password.
  // 2. Method. ( Balance, Send, Etc ).
  // 3. Messages. ( Array of messages ).

  try {
    const response = await API.post("", data);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

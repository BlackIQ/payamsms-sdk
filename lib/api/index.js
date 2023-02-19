// ----------------------------------------------
// index.js
// ----------------------------------------------
// The instanced of sending message API is here.
// We have an endpoint that we call it.
// To call it easier, we created this instance.

import axios from "axios";

const API = axios.create({
  baseURL: "https://new.payamsms.com/services/rest/index.php",
});

export default API;

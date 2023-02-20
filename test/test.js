// ----------------------------------------------
// test.js
// ----------------------------------------------
// Ok, here we can test the lib.
// To test the librarry, in lib folder, enter $ npm link.
// Som in test folder, enter $ npm link payamsms-sdk.

// Imports
import PayamSMS from "payamsms-sdk";
import dotenv from "dotenv";

// Env
dotenv.config();
const env = process.env;

// Initial sms
const sms = new PayamSMS(
  env.PAYAM_ORGANIZATION,
  env.PAYAM_USERNAME,
  env.PAYAM_PASSWORD,
  env.PAYAM_LINE
);

// Single message
const message = {
  recipient: "09014784362",
  body: "Test valid phone",
};

sms.single(message).then((result) => {
  console.log(result);
});

// Multi messages
const messages = [
  {
    recipient: "090147362",
    body: "",
  },
  {
    recipient: "090147362",
    body: "Multi 2",
  },
];

sms.multi(messages).then((result) => {
  console.log(result);
});

// Gettubg balaance
const balance = sms.getBalance();

balance.then((result) => {
  console.log(result);
});

// Import PayamSMS
const PayamSMS = require("payamsms-sdk");

require("dotenv").config({ path: "./.env" });
env = process.env;

// Initial sms
const sms = new PayamSMS(
    env.PAYAM_ORGANIZATION,
    env.PAYAM_USERNAME,
    env.PAYAM_PASSWORD,
    env.PAYAM_LINE
);

// Sample message
const messages = [
    {
        recipient: "989102766731",
        body: "Sep 10. Working in PayamSMS-SDK.",
    },
];

// Sending messages
const send = sms.send(messages);

send.then((result) => {
    console.log(result);
});

// Gettubg balaance
const balance = sms.getBalance(messages);

balance.then((result) => {
    console.log(result);
});
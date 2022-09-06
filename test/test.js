// Import PayamSMS
const PayamSMS = require("payamsms-sdk");

require("dotenv").config({ path: "./.env" });
env = process.env;

// Initial sms
const sms = new PayamSMS(env.PAYAM_ORGANIZATION, env.PAYAM_USERNAME, env.PAYAM_PASSWORD, env.PAYAM_LINE);

// Sample message
const messages = [
    {
        recipient: "989363158232",
        body: "Testing and testing.",
    },
];

// Sending messages
const send = sms.send(messages);

send.then((result) => {
    if (result.code === 200) console.log(result.message);
    else console.log(result.message);
});

// Gettubg balaance
const balance = sms.getBalance(messages);

balance.then((result) => {
    console.log(result.balance);
});
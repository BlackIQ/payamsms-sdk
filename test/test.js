const PayamSMS = require("payamsms-sdk");

// Initial sms
const sms = new PayamSMS("sbbiran", "sbbiran", "123654789", "98200040004");

// Defailt message
const messages = [
    {
        recipient: "989363158232",
        body: "",
    },
];

// Sending messages
const send = sms.send(messages);

send.then((result) => {
    console.log(result);
    // if (result.code === 200) console.log(result);
    // else console.log(result.message);
});

// Gettubg balaance
const balance = sms.getBalance(messages);

balance.then((result) => {
    console.log(result);
});
const PayamSMS = require("payamsms-sdk");

const sms = new PayamSMS("sbbiran", "sbbiran", "123654789", "98200040004");

const messages = [
    {
        recipient: "989363158232",
        body: "Hi",
    },
];

const send = sms.send(messages);

send.then((result) => {
    if (result.code === 200) console.log(result);
    else console.log(result.message);
});
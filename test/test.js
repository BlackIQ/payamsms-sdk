const PayamSMS = require("payamsms-sdk");

const sms = new PayamSMS("sbbiran", "sbbiran", "123654789");

const messages = [
    {
        sender: "98200040004",
        recipient: "989233410369",
        body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        customerId: 24,
    },
];

const send = sms.send(messages);

send.then((result) => console.log(result))
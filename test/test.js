const PayamSMS = require("payamsms-sdk");

const sms = new PayamSMS("sbbiran", "sbbiran", "123654789");

const messages = [
    {
        recipient: "989363158232",
        body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
];

const send = sms.send(messages);

send.then((result) => {
    if (result.code === 200) console.log("Messages sent");
    else console.log("Message can not be send");
});
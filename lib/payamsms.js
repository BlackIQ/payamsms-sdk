const Axios = require("axios");
const config = require("../config");

class PayamnSMS {
    constructor(organization, username, password) {
        this.organization = organization;
        this.username = username;
        this.password = password;
    }

    authentication() {
        return {
            organization: this.organization,
            username: this.username,
            password: this.password,
        }
    }

    send(messages) {
        const goingMessages = messages;

        goingMessages.forEach(message => {
            message['sender'] = "98200040004";
            message['customerId'] = 4245;
        });

        const sendData = {
            ...this.authentication(),
            method: "send",
            messages: goingMessages,
        };

        return Axios.post(config.baseUrl, sendData)
            .then((result) => result.data)
            .catch((error) => error.response);
    }
}

module.exports = PayamnSMS;
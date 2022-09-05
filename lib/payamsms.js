const Axios = require("axios");
const config = require("../config");
const errors = require("./errors");

class PayamnSMS {
    constructor(organization, username, password, line) {
        this.organization = organization;
        this.username = username;
        this.password = password;
        this.line = line;
    }

    makeid(length) {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
    
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(
                Math.floor(
                    Math.random() * charactersLength
                )
            );
        }
    
       return result;
    }

    authentication() {
        return {
            organization: this.organization,
            username: this.username,
            password: this.password,
        }
    }

    messageComplition(messages) {
        const goingMessages = messages;

        goingMessages.forEach(message => {
            message['sender'] = this.line;
            message['customerId'] = this.makeid(10);
        });

        return goingMessages;
    }

    errorMessage(code) {
        return errors.filter(error => error.code === code)[0].message;
    }

    send(messages) {
        const sendData = {
            ...this.authentication(),
            method: "send",
            messages: this.messageComplition(messages),
        };

        return Axios.post(config.baseUrl, sendData)
            .then((result) => {
                const data = result.data;

                if (Object.keys(data.data[0]).length === 3) return { code: 200, message: "Message sent" };
                else return { code: 500, message: this.errorMessage(data.data[0].ErrorCode) };
            })
            .catch((error) => error.response);
    }
}

module.exports = PayamnSMS;
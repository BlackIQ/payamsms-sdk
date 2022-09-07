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

    authentication() {
        return {
            organization: this.organization,
            username: this.username,
            password: this.password,
        };
    }

    messageComplition(messages) {
        const goingMessages = messages;

        goingMessages.forEach(message => message['sender'] = this.line);

        return goingMessages;

        // return messages.forEach(message => message['sender'] = this.line);
    }

    errorMessage(code) {
        return errors.filter(error => error.code === code)[0].message;
    }

    getStatus(serverIds) {
        const sendData = {
            ...this.authentication(),
            method: "getstatus_serverId",
            serverIds,
        };

        return Axios.post(config.baseUrl, sendData)
            .then((result) => result.data)
            .catch((error) => { return { errorcode: 999, message: "SDK ERROR" }; });
    }

    getBalance() {
        const sendData = {
            ...this.authentication(),
            method: "getbalance",
        };

        return Axios.post(config.baseUrl, sendData)
            .then((result) => { return { balance: result.data.data }; })
            .catch((error) => { return { errorcode: 999, message: "SDK ERROR" }; });
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
                let returnData = [];

                const gotData = data.data;

                gotData.forEach((item) => {
                    if (Object.keys(item).length === 3) {
                        returnData.push({
                            code: 200,
                            message: "Message sent",
                            serverId: item.serverId,
                        });
                    } else {
                        returnData.push({
                            code: 500,
                            message: this.errorMessage(item.ErrorCode),
                        });
                    }
                });

                return returnData;
            })
            .catch((error) => { return { errorcode: 999, message: "SDK ERROR" }; });
    }
}

module.exports = PayamnSMS;
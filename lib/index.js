// ----------------------------------------------
// index.js
// ----------------------------------------------
// The main file.
// Here is where class defines and initiate.
// Here are methods and come helpers.

import {
  errorMessage,
  messageComplition,
  validPhoneNumber,
} from "./functions/index.js";
import { SMS } from "./services/index.js";

class PayamnSMS {
  // ----------------------------------------------
  // PayamnSMS
  // ----------------------------------------------
  // PayamSMS class.
  // In this class we have some private and public methods.
  // Also have a constructor for initialing the class.

  constructor(organization, username, password, line) {
    // ----------------------------------------------
    // constructor()
    // ----------------------------------------------
    // This constructor takes some data from user.
    // We use these data to authenticate and recognize the line for sending sms.
    // Organization: One of the items to authenticate the request is organization. Define were is this service registered for.
    // Username: Like a simple authentication. we have username of your organization here.
    // Password: When you define a username, you need to say the password. In this case we also take password.
    // Line: Line means the phoneNumber or you can call it sender. Where sms is going to be send from.

    this.organization = organization;
    this.username = username;
    this.password = password;
    this.line = line;
  }

  // Tries
  max = 3; // Maximum of tries

  authentication() {
    // ----------------------------------------------
    // authentication()
    // ----------------------------------------------
    // Each request need to be authenticated.
    // We create this method to return a object of authentication data.
    // For each request, this method runs.

    return {
      organization: this.organization,
      username: this.username,
      password: this.password,
    };
  }

  async getBalance() {
    // ----------------------------------------------
    // getBalance()
    // ----------------------------------------------
    // To get the balance of account, we use this method.
    // Just in sendingData, set method to getbalance.

    const sendData = {
      ...this.authentication(),
      method: "getbalance",
    };

    try {
      const data = await SMS.CALL_API(sendData);

      return data.data;
    } catch (error) {
      return {
        code: 500,
        message: errorMessage("S1"),
      };
    }
  }

  single(message, tries = 0) {
    // ----------------------------------------------
    // single()
    // ----------------------------------------------
    // To send only a single message.
    // In this method, you can send only one message.
    // Important thing is this method can be run once again if sms did not send.

    if (tries >= 3) {
      return {
        code: 500,
        message: errorMessage("S4"),
      };
    }

    const { body, recipient } = message;

    if (body !== "") {
      if (validPhoneNumber(recipient)) {
        const sendData = {
          ...this.authentication(),
          method: "send",
          messages: messageComplition([message], this.line),
        };

        return SMS.CALL_API(sendData)
          .then((response) => {
            const gotData = response.data[0];
            const returnData = {};

            if (Object.keys(gotData).length === 3) {
              returnData["code"] = 200;
              returnData["message"] = "Message sent";
              returnData["serverId"] = gotData.serverId;

              return returnData;
            } else {
              tries += 1;
              const delayMs = 3000;

              return new Promise((resolve) =>
                setTimeout(() => resolve(this.single(message, tries)), delayMs),
              );
            }
          })
          .catch((error) => {
            console.error(error);
            return null;
          });
      } else {
        return {
          code: 500,
          message: "Recipient is wrong.",
        };
      }
    } else {
      return {
        code: 500,
        message: "Message can't be empty.",
      };
    }
  }

  async multi(messages) {
    // ----------------------------------------------
    // multi()
    // ----------------------------------------------
    // To send multi messages.
    // Here just pass an array of messages.

    const sendData = {
      ...this.authentication(),
      method: "send",
      messages: messageComplition(messages, this.line),
    };

    try {
      const data = await SMS.CALL_API(sendData);

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
            message: errorMessage(item.ErrorCode),
          });
        }
      });

      return returnData;
    } catch (error) {
      return {
        code: 500,
        message: errorMessage("S1"),
      };
    }
  }
}

export default PayamnSMS;

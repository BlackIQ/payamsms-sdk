# Usage

## Create a client

```javascript
import PayamSMS from "payamsms-sdk";

const sms = new PayamSMS(
  "organization", // organization id / name
  "username",
  "password",
  "3000xxxxxxx", // sender line
);
```

Requests go to `https://new.payamsms.com/services/rest/index.php` with `organization`, `username`, and `password` on each call.

## Functions and how to use the SDK

### Balance

Shows your the current account balance.

```javascript
const result = await sms.getBalance();

console.log(result.balance);
```

### Send

Send messages!

Pass an **array of objects** (`recipient` + `body`). The SDK attaches your sender line automatically.

```javascript
const messages = [
  {
    recipient: "0912xxxxxxx",
    body: "Hello from PayamSMS",
  },
  {
    recipient: "0935xxxxxxx",
    body: "Second message",
  },
];

const result = await sms.send(messages);

console.log(result);
```

Successful items look like:

```json
{
  "code": 200,
  "message": "Message sent",
  "serverId": 10565602949
}
```

Failed items use `code: 500` and a mapped error message.

Phone numbers are validated with a simple Iranian mobile pattern (`09…` / `+98…`).

## Notes

- Methods are async — use `await` or `.then()`.
- Receive/inbox is not implemented yet in this SDK.

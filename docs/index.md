# PayamSMS SDK

JavaScript client for the [PayamSMS](https://payamsms.com) REST API.

Check balance and send one or many SMS messages with organization-based authentication.

```javascript
import PayamSMS from "payamsms-sdk";

const sms = new PayamSMS("organization", "username", "password", "3000xxxxxxx");

const balance = await sms.getBalance();

console.log(balance);
```

|            |                                                                              |
| ---------- | ---------------------------------------------------------------------------- |
| **npm**    | [npmjs.com/package/payamsms-sdk](https://www.npmjs.com/package/payamsms-sdk) |
| **Source** | [GitLab](https://gitlab.com/blackiq-packages/npm/payamsms-sdk)               |

## Next

- [Install](learn/install.md)
- [Usage](learn/usage.md)

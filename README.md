# PayamSMS

JavaScript SDK for the PayamSMS SMS API.

```bash
npm install payamsms-sdk
```

```javascript
import PayamSMS from "payamsms-sdk";

const sms = new PayamSMS("organization", "username", "password", "3000xxxxxxx");

console.log(await sms.getBalance());

await sms.send([{ recipient: "0912xxxxxxx", body: "Hello" }]);
```

**Methods:** `getBalance` · `send`

## Docs

Full documentation: [payamsms.amirhossein.info](https://payamsms.amirhossein.info)

## Links

| Title  | URL                                        |
| ------ | ------------------------------------------ |
| npm    | https://www.npmjs.com/package/payamsms-sdk |
| Source | https://github.com/BlackIQ/payamsms-sdk    |
| Docs   | https://payamsms.amirhossein.info          |

## License

MIT

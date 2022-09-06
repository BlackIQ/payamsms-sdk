# PayamSMS JavaScript SDK

**PayamSMS** is a SMS provider.

## How to use this package

So, let's have a quick review of our steps.

- [Installation](#installation)
- [Configuration](#configuration)
- [Methods](#methods)

### Installation

To install **PayamSMS SDK** use `npm` command like below:

```shell
$ npm i payamsms-sdk
```

### Configuration

Now you installed package. You need to initial it. Just require it and use `PayamSMS` class with 4 params.

- username
- password
- organization
- line

```javascript
// Import SDK
const PayamSMS = require("payamsms-sdk");

// Initial it
const sms = new PayamSMS("organization", "username", "password", "line");
```

### Methods

This SDK has 2 main methods for sending and receiving messages. One other is getting balance that 

- `send`
- `receive`

#### Send

Now you want to send a message, or many messages. Ok, have fun with this method!

```javascript
// Descibe messages
const messages = [
    {
        recipient: "98912xxxxxxx",
        body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
];

// Send message
const send = sms.send(messages);
```

Then the return object is like below:

- 200 | OK

```json
{
    "code": 200,
    "message": "Message sent",
    "messages": [
        {
            {
                serverId: 10565602949,
                customerId: 7759827466,
                Mobile: "98912xxxxxxx"
            }
        }
    ]
}
```

- 500 | Not OK

```json
{
    "code": 500,
    "message": "Error details will be describe here."
}
```

So, handle it like this:

```javascript
send.then((result) => {
    if (result.code === 200) {
        // Do what you want

        // Show message
        console.log(result.message);
    };
    else {
        // Do what you want

        // Show message
        console.log(result.message);
    };
});
```

### Receive

> It will be completed soon . . .

### balance

With `balance` you can get how much money your account has. Ok, just follow instructions:

```javascript
const balance = sms.getBalance(messages);

balance.then((result) => {
    console.log(result.balance);
});
```

What `result` contains, is like below:

```json
{
    "balance": "2020153"
}
```

## Development

If you want to develop the package, it is so simple. just follow steps below.

- Clone the project
- Install dependencies by running `$ npm install`
- Add your values in `.env` file
- Start changing!
    - Link package
    - Test

> Before you start: **Remember the base or code are stored in `lib/payamsms.js`. You need to edit there.

### Cloning the project

To clone the project, you need to have git installed. Ok, now clone it same as command below.

```shell
$ git clone https://gitlab.com/BlackIQ/payamsms-sdk
```

### installing dependencies

Next, install what package uses with `npm i` or `npm install`.

```shell
$ npm i
```

### Add your values in `.env` file

Go to `test` directory and make a copy of `.env` file.

```shell
$ cp .env.example .env
```

Now `.env` is created with keys and just add your values.

### Changing

To change package or anything, your need a testing environment to use linked package. Just follow steps.

#### Link package

We asoume you are in `lib` directory. Right. You can open a **tmux** or in another terminal to cd in `test` directory.

In `lib` directory enter link command:

```shell
$ npm link
```

So, in other terminal, or other tmux part, link your development package to your `test` directory. If you are in the `test` directory ok, if not, just say `cd test` and enter the linking command:

```shell
$ npm link payamsms-sdk
```

Linking step is done.

#### Test

Your test app is linked. Change anything in package and test it in `test` directory.
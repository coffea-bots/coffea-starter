# coffea-starter

_coffea starter kit / boilerplate to quickly develop a chat bot_


## Starting a new project

```
git clone https://github.com/coffea-bots/coffea-starter PROJECT_NAME
```


## Setup

Firstly, you need to install the dependencies:

```
npm install
```

While this is running, you can create a `config.json`, which will be passed to
[coffea's connect function](https://github.com/caffeinery/coffea/tree/1.0-beta#connecting):

```js
[
  {
    "protocol": "telegram",
    "token": "INSERT_TELEGRAM_TOKEN_HERE"
  },
  {
    "protocol": "slack",
    "token": "INSERT_TELEGRAM_TOKEN_HERE"
  }
]
```

**Important:** Don't forget to install the protocols via `npm install coffea-PROTOCOLNAME`,
e.g. `npm install coffea-telegram coffea-slack` (in this case)

Feel free to add as few or as many networks/protocols as you'd like. Currently,
only [slack](https://github.com/caffeinery/coffea-slack) and [telegram](https://github.com/caffeinery/coffea-telegram) are supported. Support
for [irc](https://github.com/caffeinery/coffea-irc) is work-in-progress.

Lastly, you should take a look at `src/index.js`. Feel free to adjust the code
to your liking. As your bot grows, make sure to split it up into separate
files.


## Running

Now that your bot is set up, it's time to run it:

```
npm start
```

During development, you can also use:

```
npm run start:dev
```

To enable debug messages and run the code with on-the-fly compilation
(via `babel-node`).

Or you can use:

```
npm run watch
```

To automatically restart the bot when the code changes.

## Harry's Discord Bot: Message Logger
This is a Discord bot that logs all messages sent within a whitelisted list of channels and servers and posts these logs within an embed to a separate Discord server through a webhook.

# Requirements
To run this Discord bot, you need to have the following:
- Node.js (v14 or higher)
- Discord bot token (obtainable from Discord Developer Portal)

# Installation
1. Clone this repository to your local machine.
```
git clone https://github.com/username/discord-bot.git
```
2. Run `npm install` to install the required dependencies.
```
npm install
```
3. Create a .env file in the root directory and add the following environment variables:
```
DISCORD_BOT_TOKEN=<your_discord_bot_token>
WEBHOOK_URL=<webhook_url>
WHITELISTED_CHANNELS=<channel_id_1>,<channel_id_2>,...
```
4. Run `npm start` to start the bot.
```
npm start
```

# Usage
Once the bot is running, it will start logging messages in the whitelisted channels and posting them to the specified webhook. You can customize the logging and posting behavior by modifying the code in src/index.js.

# Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

# License
This project is licensed under the MIT License.
https://opensource.org/licenses/MIT


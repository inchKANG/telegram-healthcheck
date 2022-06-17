const TelegramBot = require('node-telegram-bot-api');

class Bot {
    constructor(token, chatId) {
        this.chatId = chatId
        this.bot = new TelegramBot(token)
    }

    async sendMessage(message) {
        return await this.bot.sendMessage(this.chatId, message);
    }
}

module.exports = Bot;

const axios = require("axios");
const Bot = require("./Bot");

const scheduler = (seconds) => {
    const bot = new Bot(process.env.BOT_TOKEN, process.env.CHAT_ID);

    const getMessage = async () => {
        let message = "";
        let isSuccess = true;
        try {
            const result = await axios.get(process.env.HEALTHCHECK_URL);
            message = result.data;
        } catch (error) {
            isSuccess = false;
            message = error.code
        }
        if (typeof message !== "string") {
            message = JSON.stringify(message)
        }
        return ` ${isSuccess ? "success" : "failed"} : ${message}`;
    }

    const scheduling = async () => {
        const message = await getMessage();
        bot.sendMessage(message);
        await new Promise((r) => setTimeout(r, seconds * 1000));
        scheduling();
    }

    scheduling();
}

module.exports = {
    scheduler
}


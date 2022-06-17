# health check telegram bot

1. Get a Telegram bot and an api token through botFather.
2. Open a public telegram channel.
3. Add bot as channel admin.
4. After sending a request to https://api.telegram.org/bot{API_TOKEN}/sendMessage?chat_id=@{CHANNEL_PATH}&text=hello, get a chatId, The channel path is taken from the channel url ( https://t.me/{CHANNEL_PATH} )
5. Insert BOT_TOKEN, CHAT_ID, and HEALTHCECK_URL into the .env file.
6. npm run start (If you want to turn on multiple, use the pm2 ecosystem)
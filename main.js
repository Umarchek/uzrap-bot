const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "1955321733:AAE_g8WJ04Txd0pGTTea8TQbBwJUZK0WP-U";
const bot = new TelegramBot(TOKEN, {
    polling: true,
    updates: {
        enabled: true,
        get_interval: 1000,
    },
});
const start = () => {
    bot.on("message", async (message) => {
        const { chat, message_id } = message;
        const chatId = message.chat.id;
        const name = message.from.first_name;
        const text = message.text;

        if (
            text == "/start" ||
            text == "start" ||
            text == "начать" ||
            text == "/start@Uzrap_sizbilan_bot"
        ) {
            bot.deleteMessage(chatId, message_id);
            bot.sendPhoto(
                chat.id, "images/first.jpg", {
                caption: `Salom <b>${name}</b>.\nQaysi uzbek reperni musiqasi sizga yoqadi?`,
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: `💔ᴅᴏxxɪᴍ💔`,
                                callback_data: `Doxxim`,
                            },
                            {
                                text: `❤️‍🩹ᴍ1ɴᴏʀ❤️‍🩹`,
                                callback_data: `M1nor`,
                            },
                            {
                                text: `🔪ᴜᴢʙᴏᴏᴍ🔪`,
                                callback_data: `Uzboom`,
                            },
                        ],
                        [
                            {
                                text: `🪓ᴋᴏɴsᴛᴀ🪓`,
                                callback_data: `Konsta`,
                            },
                            {
                                text: `🪚ғᴀʏᴢᴇᴇ🪚`,
                                callback_data: `Fayzee`,
                            },
                            {
                                text: `💉ᴍᴏʀғ💉`,
                                callback_data: `Morf`,
                            },

                        ],
                        [
                            {
                                text: `🚬ʏᴀɢᴢᴏɴ🚬`,
                                callback_data: `yangoz`,
                            },
                        ]
                    ],
                },
            })


        }
    })
    bot.on("callback_query", async (query) => {
        const { chat, message_id, text } = query.message;
        const chatId = message.chat.id;
        switch (query.data) {

        }
    });
}
start()
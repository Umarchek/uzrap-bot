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
        const lastname = message.from.last_name;
        const id = message.from.id;
        const username = message.from.username;
        if (text == "/info" || text == "/info@Uzrap_sizbilan_bot") {
            bot.getUserProfilePhotos(id, 0, 1).then(function (data) {
                bot.sendPhoto(
                    chatId,
                    data.photos[0][0].file_id,
                    {
                        caption: `Ваше имя : ${name}\nВаше фамилия : ${lastname}\nВаш ID : ${id}\n Ваш user : @${username}\n`,
                    },
                    {
                        reply_to_message_id: message_id,
                    }
                );
            });
        } else if (
            text == "/start" ||
            text == "start" ||
            text == "начать" ||
            text == "/start@Uzrap_sizbilan_bot"
        ) {
            bot.deleteMessage(chatId, message_id);
            bot.sendMessage(
                chatId,
                `Salom <b>${name}</b>.\nQaysi uzbek reperni musiqasi sizga yoqadi?`,
                {
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
                                    text: 'Keyingisi ➡️',
                                    callback_data: 'Keyingisi'
                                }
                            ]
                        ],
                    },
                }
            );
        }


        else if (
            text == "cls" ||
            text == "clear" ||
            text == "/cls" ||
            text == "/cls@Uzrap_sizbilan_bot"
        ) {
            for (let i = 0; i < 301; i++)
                bot
                    .deleteMessage(message.chat.id, message.message_id - i)
                    .catch((er) => {
                        return;
                    });
        }

        // commands
        bot.setMyCommands([
            { command: "/start", description: "Salomlashish" },
            { command: "/Musics", description: "Musiqalar" },
            { command: "/profile", description: "Sizning profilingiz" },
            { command: "/cls", description: "Chatni tozalash" },
        ]);
    })

}
start()
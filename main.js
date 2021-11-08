const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "1955321733:AAE_g8WJ04Txd0pGTTea8TQbBwJUZK0WP-U";
const fs = require('fs')
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
                caption: `Salom <b>${name}</b>.Uᴢʀᴇᴘ ᴏʟᴀᴍɪᴅᴀɢɪ ᴇɴɢ ᴍᴀsʜʜᴜʀ ᴠᴀ ᴀsʜᴜʟᴀsɪ ᴋᴏɴɢɪʟɢᴀ ʏᴀǫɪɴ ᴋᴇʟᴀᴅɪɢᴀɴ ʀᴇᴘᴇʀ ᴠᴀ ʜɪᴘʜᴏᴘ ᴜsᴛᴀʟᴀʀɪɴɪ ɪᴊᴏᴅ ᴍᴀʜsᴜʟɪɴɪ ʏᴏʀɪᴛɪʙ ʙᴏʀᴜᴠᴄʜɪ ʙᴏᴛɪᴍɪᴢɢᴀ ʜᴜsʜ ᴋᴇʟɪʙsɪᴢ
                ǫᴀʏsɪ ɪᴊᴏᴅᴋᴏʀɪᴍɪᴢɴɪ ᴛᴀɴʟᴀʏsɪᴢ🎤🎧`,
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
        const chatId = query.from.id
        switch (query.data) {
            case "Doxxim":
                await bot.sendPhoto(chat.id, 'https://avatars.mds.yandex.net/i?id=c6e00ed80e9628bc82efde8922a2515c-5115418-images-thumbs&n=13', {
                    caption: `ᴅᴏxxɪᴍ ᴛᴀʀᴏɴᴀʟᴀʀɪɴɪ ᴘᴀsʀᴏǫᴅᴀ ᴛᴀɴɢʟᴀsʜɪɴɢɪᴢ ᴍᴜᴍᴋᴜɴ !`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴄʜɪʀᴏʏʟɪɢɪᴍ ɢᴜʟɪᴍ`,
                                    callback_data: "d-Gulim",
                                },
                                {
                                    text: `ᴛᴜsʜʟᴀʀɪᴍɢᴀ ᴋɪʀ`,
                                    callback_data: "d-kir",
                                },

                            ],
                            [
                                {
                                    text: `ᴜ ᴍᴇɴ ᴜᴄʜᴜɴ`,
                                    callback_data: "d-uchun",
                                },
                                {
                                    text: `sᴇᴠɢɪᴍɪᴢ ᴛᴀᴍᴏᴍ`,
                                    callback_data: "d-tamom",
                                },
                            ],
                            [

                                {
                                    text: `ᴍᴀʏᴜs ᴛᴀʀᴏɴᴀᴍ`,
                                    callback_data: "d-taronam",
                                },
                                {
                                    text: `ᴋᴇᴄʜɪʀɪɴɢ ᴏɴᴀ`,
                                    callback_data: "d-ona",
                                },
                            ],
                            [

                                {
                                    text: `ᴇsʟᴀᴍᴀ ᴍᴇɴɪ`,
                                    callback_data: "d-meni",
                                },
                                {
                                    text: `ǫᴏ'ɢ'ɪʀᴄʜᴏǫ`,
                                    callback_data: "d-irchoq",
                                },
                            ],
                            [
                                {
                                    text: `ʙᴏsʜɪɢᴀ 🔝`,
                                    callback_data: "Boshiga",
                                },
                            ],
                        ],
                    },
                });
                break;
            case "d-Gulim":
                const Gulim = fs.readFileSync('musics/Gulim.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, Gulim, {
                    caption: `ᴄʜɪʀᴏʏʟɪɢɪᴍ ɢᴜʟɪᴍ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Doxxim`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "d-kir":
                const kir = fs.readFileSync('musics/kir.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, kir, {
                    caption: `ᴛᴜsʜʟᴀʀɪᴍɢᴀ ᴋɪʀ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Doxxim`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "d-uchun":
                const uchun = fs.readFileSync('musics/uchun.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, uchun, {
                    caption: `ᴜ ᴍᴇɴ ᴜᴄʜᴜɴ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Doxxim`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "d-tamom":
                const Tamom = fs.readFileSync('musics/Tamom.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, Tamom, {
                    caption: `sᴇᴠɢɪᴍɪᴢ ᴛᴀᴍᴏᴍ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Doxxim`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "d-taronam":
                const taronam = fs.readFileSync('musics/taronam.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, taronam, {
                    caption: `ᴍᴀʏᴜs ᴛᴀʀᴏɴᴀᴍ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Doxxim`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "d-ona":
                const ona = fs.readFileSync('musics/ona.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, ona, {
                    caption: `ᴋᴇᴄʜɪʀɪɴɢ ᴏɴᴀ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Doxxim`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "d-meni":
                const meni = fs.readFileSync('musics/meni.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, meni, {
                    caption: `ᴇsʟᴀᴍᴀ ᴍᴇɴɪ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Doxxim`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "d-irchoq":
                const irchoq = fs.readFileSync('musics/irchoq.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, irchoq, {
                    caption: `ǫᴏ'ɢ'ɪʀᴄʜᴏǫ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Doxxim`,
                                },
                            ]
                        ],
                    },
                });
                break
            case 'Boshiga':
                bot.deleteMessage(chatId, message_id);
                await bot.sendPhoto(
                    chat.id, "images/first.jpg", {
                    caption: `Uᴢʀᴇᴘ ᴏʟᴀᴍɪᴅᴀɢɪ ᴇɴɢ ᴍᴀsʜʜᴜʀ ᴠᴀ ᴀsʜᴜʟᴀsɪ ᴋᴏɴɢɪʟɢᴀ ʏᴀǫɪɴ ᴋᴇʟᴀᴅɪɢᴀɴ ʀᴇᴘᴇʀ ᴠᴀ ʜɪᴘʜᴏᴘ ᴜsᴛᴀʟᴀʀɪɴɪ ɪᴊᴏᴅ ᴍᴀʜsᴜʟɪɴɪ ʏᴏʀɪᴛɪʙ ʙᴏʀᴜᴠᴄʜɪ ʙᴏᴛɪᴍɪᴢɢᴀ ʜᴜsʜ ᴋᴇʟɪʙsɪᴢ
                    ǫᴀʏsɪ ɪᴊᴏᴅᴋᴏʀɪᴍɪᴢɴɪ ᴛᴀɴʟᴀʏsɪᴢ🎤🎧`,
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
            case "M1nor":
                bot.deleteMessage(chatId, message_id)
                bot.sendPhoto(chatId, 'https://muzfm.tv/uploads/singers/photos/m1nor.jpg', {
                    caption: `❤️‍🩹ᴍ1ɴᴏʀ ᴛᴀʀᴏɴᴀʟᴀʀɪɴɪ ᴘᴀsʀᴏǫᴅᴀ ᴛᴀɴɢʟᴀsʜɪɴɢɪᴢ ᴍᴜᴍᴋᴜɴ !❤️‍🩹`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴄʜɪʀᴏʏʟɪɢɪᴍ ɢᴜʟɪᴍ`,
                                    callback_data: "d-Gulim",
                                },
                                {
                                    text: `ᴛᴜsʜʟᴀʀɪᴍɢᴀ ᴋɪʀ`,
                                    callback_data: "d-kir",
                                },

                            ],
                            [
                                {
                                    text: `ʙᴏsʜɪɢᴀ 🔝`,
                                    callback_data: "Boshiga",
                                },
                            ],
                        ],
                    },
                })
        }
    });
}
start()
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
                break
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
            case "M1nor":
                bot.sendPhoto(chatId, 'https://muzfm.tv/uploads/singers/photos/m1nor.jpg', {
                    caption: `❤️‍🩹ᴍ1ɴᴏʀ ᴛᴀʀᴏɴᴀʟᴀʀɪɴɪ ᴘᴀsʀᴏǫᴅᴀ ᴛᴀɴɢʟᴀsʜɪɴɢɪᴢ ᴍᴜᴍᴋᴜɴ !❤️‍🩹`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴍᴇɴᴛᴀʟɪᴛᴇᴛ`,
                                    callback_data: "m-mentalitet",
                                },
                                {
                                    text: `ᴏᴢᴏᴅᴍᴀɴ`,
                                    callback_data: "m-ozodman",
                                },
                            ],
                            [
                                {
                                    text: `ʙᴏʟᴀʟɪᴋ`,
                                    callback_data: "m-bolalik",
                                },
                                {
                                    text: `ᴅᴏ'sᴛɪɴɢᴍᴀɴ`,
                                    callback_data: "m-dust",
                                },
                            ],
                            [
                                {
                                    text: `sᴏ'ɴɢɢɪ xᴀᴛ..`,
                                    callback_data: "m-xat",
                                },
                                {
                                    text: `ʙᴏ'ʟᴅɪ ᴛᴀᴍᴏᴍ`,
                                    callback_data: "m-tamom",
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
                break
            case "Uzboom":
                bot.sendPhoto(chatId, 'https://static10.tgstat.ru/channels/_0/6b/6be4d4d49f1057f095a61d2b8a10f652.jpg', {
                    caption: `🔪ᴜᴢʙᴏᴏᴍ ᴛᴀʀᴏɴᴀʟᴀʀɪɴɪ ᴘᴀsʀᴏǫᴅᴀ ᴛᴀɴɢʟᴀsʜɪɴɢɪᴢ ᴍᴜᴍᴋᴜɴ !🔪`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴍᴀʀɪᴊᴜᴀɴᴀ`,
                                    callback_data: "u-marijuana",
                                },
                                {
                                    text: `ᴜᴍʀ ᴋɪᴛᴏʙ`,
                                    callback_data: "u-kitob",
                                },
                            ],
                            [
                                {
                                    text: `ʏɪʟʟᴀʀ`,
                                    callback_data: "u-yillar",
                                },
                                {
                                    text: `ɴᴏʙᴜᴅ 3`,
                                    callback_data: "u-nobud",
                                },
                            ],
                            [
                                {
                                    text: `ʙɪʀ ǫᴀᴅᴀᴍ`,
                                    callback_data: "u-qadam",
                                },
                                {
                                    text: `ʙɪᴛᴄʜ`,
                                    callback_data: "u-bitch",
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
                break
            case "Konsta":
                bot.sendPhoto(chatId, 'https://muzfm.tv/uploads/posts/2020-07/1596005155_konsta.jpg', {
                    caption: `🪓ᴋᴏɴsᴛᴀ ᴛᴀʀᴏɴᴀʟᴀʀɪɴɪ ᴘᴀsʀᴏǫᴅᴀ ᴛᴀɴɢʟᴀsʜɪɴɢɪᴢ ᴍᴜᴍᴋᴜɴ !🪓`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ɴᴀꜰᴀs`,
                                    callback_data: "k-nafas",
                                },
                                {
                                    text: `ᴊɪɴɴɪxᴏɴᴀ`,
                                    callback_data: "k-jinnixona",
                                },
                            ],
                            [
                                {
                                    text: `ᴍᴏ'ᴊɪᴢᴀʟᴀʀ`,
                                    callback_data: "k-jizalar",
                                },
                                {
                                    text: `ᴜʏᴀᴛ`,
                                    callback_data: "k-uyat",
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
                break
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
            case "m-mentalitet":
                const mentalitet = fs.readFileSync('musics/m-mentalitet.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, mentalitet, {
                    caption: `ᴍᴇɴᴛᴀʟɪᴛᴇᴛ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `M1nor`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "m-ozodman":
                const ozodman = fs.readFileSync('musics/m-ozodman.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, ozodman, {
                    caption: `ᴏᴢᴏᴅᴍᴀɴ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `M1nor`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "m-bolalik":
                const bolalik = fs.readFileSync('musics/m-bolalik.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, bolalik, {
                    caption: `ʙᴏʟᴀʟɪᴋ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `M1nor`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "m-dust":
                const dust = fs.readFileSync('musics/m-dust.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, dust, {
                    caption: `ᴅᴏ'sᴛɪɴɢᴍᴀɴ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `M1nor`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "m-xat":
                const xat = fs.readFileSync('musics/m-xat.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, xat, {
                    caption: `sᴏ'ɴɢɢɪ xᴀᴛ..🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `M1nor`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "m-tamom":
                const tamom = fs.readFileSync('musics/m-tamom.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, tamom, {
                    caption: `ʙᴏ'ʟᴅɪ ᴛᴀᴍᴏᴍ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `M1nor`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "u-marijuana":
                const marijuana = fs.readFileSync('musics/u-marijuana.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, marijuana, {
                    caption: `ᴍᴀʀɪᴊᴜᴀɴᴀ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Uzboom`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "u-kitob":
                const kitob = fs.readFileSync('musics/u-kitob.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, kitob, {
                    caption: `ᴜᴍʀ ᴋɪᴛᴏʙ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Uzboom`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "u-yillar":
                const yillar = fs.readFileSync('musics/u-yillar.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, yillar, {
                    caption: `ʏɪʟʟᴀʀ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Uzboom`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "u-nobud":
                const nobud = fs.readFileSync('musics/u-nobud.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, nobud, {
                    caption: `ɴᴏʙᴜᴅ 3🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Uzboom`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "u-qadam":
                const qadam = fs.readFileSync('musics/u-qadam.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, qadam, {
                    caption: `ʙɪʀ ǫᴀᴅᴀᴍ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Uzboom`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "u-bitch":
                const bitch = fs.readFileSync('musics/u-bitch.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, bitch, {
                    caption: `ʙɪᴛᴄʜ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Uzboom`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "k-nafas":
                const nafas = fs.readFileSync('musics/k-nafas.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, nafas, {
                    caption: `ɴᴀꜰᴀs🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Konsta`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "k-jinnixona":
                const jinnixona = fs.readFileSync('musics/k-jinnixona.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, jinnixona, {
                    caption: `ᴊɪɴɴɪxᴏɴᴀ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Konsta`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "k-jizalar":
                const jizalar = fs.readFileSync('musics/k-jizalar.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, jizalar, {
                    caption: `ᴍᴏ'ᴊɪᴢᴀʟᴀʀ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Konsta`,
                                },
                            ]
                        ],
                    },
                });
                break
            case "k-uyat":
                const uyat = fs.readFileSync('musics/k-uyat.mp3'); // sync! that's sad! :-( Just making a point!
                bot.sendAudio(chatId, uyat, {
                    caption: `ᴜʏᴀᴛ🎤🎧`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `ᴏʀǫᴀɢᴀ ◀️`,
                                    callback_data: `Konsta`,
                                },
                            ]
                        ],
                    },
                });
                break
        }
    });
}
start()
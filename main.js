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




// commands
    bot.setMyCommands([
        { command: "/start", description: "Salomlashish" },
        { command: "/Musics", description: "Musiqalar" },
        { command: "/profile", description: "Sizning profilingiz" },
        { command: "/cls", description: "Chatni tozalash" },
      ]);
}
start()
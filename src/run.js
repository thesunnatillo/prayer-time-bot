require("dotenv").config();
const { Bot, session } = require("grammy");
const createTable = require('./database/create_table')
const dispatcher = require("./dispatcher");

const bot = new Bot(process.env.BOT_TOKEN);

function initial() {
    return { bomdod: 0, peshin: 0, asr: 0, shom: 0, xufton: 0 };
  }

bot.use(session({ initial }));

bot.api.setMyCommands([
    { command: 'start', description: '⭐ Boshlash' },
    { command: 'help', description: '❓ Yordam' },
    { command: 'region', description: '🗺️ Viloyatlar' },
]);

bot.use(dispatcher);

bot.start();
createTable()
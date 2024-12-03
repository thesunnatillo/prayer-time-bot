require("dotenv").config();
const { Bot } = require("grammy");
const createTable = require('./database/create_table')
const dispatcher = require("./dispatcher");

const bot = new Bot(process.env.BOT_TOKEN);

bot.use(dispatcher);

bot.start();
createTable()
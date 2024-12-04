const { Composer } = require("grammy");
const startHandler = require("./handlers/start");
const helpHandler = require("./handlers/help");
const saveUser = require("./handlers/saveUser")
const getToday = require("./handlers/today")
const getWeek = require("./handlers/weekly")
const botInfo = require("./handlers/bot_info")

const dispatcher = new Composer();

dispatcher.command('start', startHandler)
dispatcher.command('help', helpHandler)
dispatcher.hears('📆 Bugun', getToday)
dispatcher.hears('🗓 Haftalik', getWeek)
dispatcher.hears('❗️ Bot haqida', botInfo)
dispatcher.callbackQuery(/.*/, saveUser)


module.exports = dispatcher;

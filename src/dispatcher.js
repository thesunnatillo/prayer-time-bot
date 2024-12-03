const { Composer } = require("grammy");
const startHandler = require("./handlers/start");
const helpHandler = require("./handlers/help");
const saveUser = require("./handlers/saveUser")

const dispatcher = new Composer();

dispatcher.command('start', startHandler)
dispatcher.command('help', helpHandler)
dispatcher.callbackQuery(/.*/, saveUser)

module.exports = dispatcher;

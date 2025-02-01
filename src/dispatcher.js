const { Composer } = require("grammy");
const startHandler = require("./handlers/start");
const helpHandler = require("./handlers/help");
const saveUser = require("./handlers/saveUser")
const getToday = require("./handlers/today")
const getWeek = require("./handlers/weekly")
const botInfo = require("./handlers/bot_info")
const getUsersCount = require("../src/handlers/users_count")
const regions = require("../src/handlers/regions")
// const qadaBtn = require("../src/handlers/qada-prayer")
const qadaCount = require("./handlers/qada-count")
const dadu = require("./handlers/send_msg")

const dispatcher = new Composer();

dispatcher.command('start', startHandler)
dispatcher.command('help', helpHandler)
dispatcher.command('region', regions)
dispatcher.command('stat', getUsersCount)
dispatcher.command('dadu', dadu)
dispatcher.hears('📆 Bugun', getToday)
dispatcher.hears('🗓 Haftalik', getWeek)
// dispatcher.hears('‼️ Qazo namozlar', qadaBtn)
dispatcher.hears('❗️ Bot haqida', botInfo)
dispatcher.callbackQuery(["bomdod_read", "bomdod_unread", "peshin_read", "peshin_unread", "asr_read", "asr_unread", "shom_read", "shom_unread", "xufton_read", "xufton_unread"], qadaCount)
dispatcher.callbackQuery(["toshkent", "andijon", "buxoro", "navoiy", "termiz", "qarshi", "namangan", "farg'ona", "xiva", "nukus", "jizzax", "guliston"], saveUser)


module.exports = dispatcher;

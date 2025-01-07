require("dotenv").config();
const saveUserQuery = require('../database/saveUserQuery')
const menuBtn = require('../keyboards/default/menu_buttons')

module.exports = async (ctx) => {
    const telegram_id = ctx.from.id
    const name = ctx.from.first_name
    const region = ctx.callbackQuery.data

    await saveUserQuery(telegram_id, name, region)
    await ctx.reply("✅ Viloyat tanlandi\n⭐ Marhamat botdan foydalaning", { reply_markup: menuBtn })
}
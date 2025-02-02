require("dotenv").config();
const saveUserQuery = require('../database/saveUserQuery')
const menuBtn = require('../keyboards/default/menu_buttons')

module.exports = async (ctx) => {
    const telegram_id = ctx.from.id
    const name = ctx.from.first_name
    const region = ctx.callbackQuery.data
    const username = ctx.from.username

    await saveUserQuery(telegram_id, name, region)
    await ctx.reply("✅ Viloyat tanlandi\n⭐ Marhamat botdan foydalaning", { reply_markup: menuBtn })
    const message_to_channel = `🤖 NAMOZ VAQTI BOT\n\n🆔 Telegram id: ${telegram_id}\n🥷 Name: ${name}\n⭐ Username: @${username}\n🗺️ Region: ${region}`
    await ctx.api.sendMessage(process.env.CHANNEL_ID || "", message_to_channel)
}
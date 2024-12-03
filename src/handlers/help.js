const menuBtn = require("../keyboards/default/menu_buttons");

module.exports = async (ctx) => {
    await ctx.reply(`Bu bot orqali 12 viloyatning namoz vaqtlarini  bilishingiz mumkin!`, { reply_markup: menuBtn })
}
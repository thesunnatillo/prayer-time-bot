const regions = require("../keyboards/inline/regions");

module.exports = async (ctx) => {
    await ctx.reply(`Salom ${ctx.from.first_name}, botga xush kelibsiz.\n\nQuyidagi viloyatlardan birini tanlang.`, {reply_markup: regions})
}
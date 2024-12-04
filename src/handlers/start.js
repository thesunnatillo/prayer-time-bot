const regions = require("../keyboards/inline/regions");

module.exports = async (ctx) => {
    await ctx.reply(`Salom ${ctx.from.first_name}, botga xush kelibsiz.\n\nQuyidagi viloyatlardan birini tanlang va /help buyrug'ini bosing!.`, {reply_markup: regions})
}
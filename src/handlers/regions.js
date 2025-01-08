const regions = require("../keyboards/inline/regions");

module.exports = async (ctx) => {
    await ctx.reply(`Viloyatlardan birini tanlang!.`, {reply_markup: regions})
}
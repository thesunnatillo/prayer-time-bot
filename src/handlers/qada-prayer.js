const qazoBtn = require("../keyboards/inline/qada.btn")

module.exports = async (ctx) => {
	ctx.reply("Qazo namozlaringiz.", { reply_markup: qazoBtn })
}
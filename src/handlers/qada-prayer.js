const qazoBtn = require("../keyboards/inline/qada.btn")

module.exports = async (ctx) => {
	const bomdod = ctx.session.bomdod
	const peshin = ctx.session.peshin
	const asr = ctx.session.asr
	const shom = ctx.session.shom
	const xufton = ctx.session.xufton
	ctx.reply("Qazo namozlaringiz.", { reply_markup: qazoBtn([bomdod, peshin, asr, shom, xufton]) })
}
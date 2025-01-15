const { InlineKeyboard } = require("grammy")

module.exports =  (qadaCounts) => {
	const btn = new InlineKeyboard()
	.text("➖", "bomdod_read").text(`🌅 Bomdod: ${qadaCounts[0]}  `).text("➕", "bomdod_unread").row()
	.text("➖", "peshin_read").text(`🕌 Peshin: ${qadaCounts[1]}  `).text("➕", "peshin_unread").row()
	.text("➖", "asr_read").text(`   🌇 Asr:    ${qadaCounts[2]}  `).text("➕", "asr_unread").row()
	.text("➖", "shom_read").text(`  🌆 Shom:   ${qadaCounts[3]}  `).text("➕", "shom_unread").row()
	.text("➖", "xufton_read").text(`🌙 Xufton: ${qadaCounts[4]}  `).text("➕", "xufton_unread")
	return btn

}

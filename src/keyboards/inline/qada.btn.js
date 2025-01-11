const { InlineKeyboard } = require("grammy")

module.exports = new InlineKeyboard()
	.text("➖", "bomdod_read").text("🌅 Bomdod: 2  ").text("➕", "bomdod_unread").row()
	.text("➖", "peshin_read").text("🕌 Peshin: 1  ").text("➕", "peshin_unread").row()
	.text("➖", "asr_read").text("   🌇 Asr:    0  ").text("➕", "asr_unread").row()
	.text("➖", "shom_read").text("  🌆 Shom:   2  ").text("➕", "shom_unread").row()
	.text("➖", "xufton_read").text("🌙 Xufton: 0  ").text("➕", "xufton_unread")
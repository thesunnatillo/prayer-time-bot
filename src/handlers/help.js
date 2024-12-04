const menuBtn = require("../keyboards/default/menu_buttons");

module.exports = async (ctx) => {
    const message = `
📆 *Bugun* — Bugungi kunning namoz vaqtlarini ko'rsatadi. Siz ushbu tugma orqali hozirgi sanaga tegishli barcha namoz vaqtlarini bilib olishingiz mumkin.

🗓 *Haftalik* — Ushbu tugma orqali haftalik namoz vaqtlarini jadval shaklida ko'rishingiz mumkin. Bu vaqtlar keyingi 7 kunni qamrab oladi.

❗️*Bot haqida* — Savollar uchun qo'llab-quvvatlash aloqalarini ko'rishingiz mumkin.
`;
    await ctx.reply(message, { reply_markup: menuBtn })
}
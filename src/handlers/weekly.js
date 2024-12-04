const axios = require("axios")
const findUser = require("../database/findUser")

module.exports = async (ctx) => {
    const user = await findUser(ctx.from.id)
    const response = await axios.get(`https://islomapi.uz/api/present/week?region=${user.rows[0].region}`)
    const data = response.data

    let message = `🗺️ Viloyat: ${data[0].region}`

    for (day of data) {
        const times_day = `
📅 ${day.weekday}

🌅 Bomdod: ${day.times.tong_saharlik}
☀️ Quyosh: ${day.times.quyosh}
🕌 Peshin: ${day.times.peshin}
🌇 Asr: ${day.times.asr}
🌆 Shom: ${day.times.shom_iftor}
🌙 Xufton: ${day.times.hufton}
`;
        message += times_day
    }
    await ctx.reply(message)
}
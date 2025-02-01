const axios = require("axios")
const findUser = require("../database/findUser")

module.exports = async (ctx) => {
    const user = await findUser(ctx.from.id)
    const response = await axios.get(`https://islomapi.uz/api/present/day?region=${user.rows[0].region}`)
    const data = response.data

    const message = `
🗺️ Viloyat: ${data.region}
📅 ${data.weekday}

🌅 Bomdod: ${data.times.tong_saharlik}

☀️ Quyosh: ${data.times.quyosh}

🕌 Peshin: ${data.times.peshin}

🌇 Asr: ${data.times.asr}

🌆 Shom: ${data.times.shom_iftor}

🌙 Xufton: ${data.times.hufton}
`;

    await ctx.reply(message)
}
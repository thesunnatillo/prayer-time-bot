const getUsersCount = require("../database/getUsersCount")
require("dotenv").config();

module.exports = async (ctx) => {
    try {
        if (ctx.from.id == process.env.ADMIN) {
            const userCount = await getUsersCount()
            await ctx.reply(`👥 Foydalanuvchilar soni: ${userCount}`)
        }
    } catch (err) {
        console.log(err)
    }
}

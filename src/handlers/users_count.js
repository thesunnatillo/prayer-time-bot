const getUsersCount = require("../database/getUsersCount")
require("dotenv").config();

module.exports = async (ctx) => {
    try {
        if (ctx.from.id == process.env.ADMIN)
            await ctx.reply(`👥 Foydalanuvchilar soni: ${getUsersCount()}`)
    } catch (err) {
        console.log(err)
    }

}
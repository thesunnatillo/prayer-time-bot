const getUsersCount = require("../database/getUsersCount")
require("dotenv").config();

module.exports = async (ctx) => {
    try {
        if (ctx.from.id === process.env.ADMIN)
            const users_count = getUsersCount()
            await ctx.reply(`👥 Foydalanuvchilar soni: ${users_count}`)
    } catch (err) {
        console.log(err)
    }

}
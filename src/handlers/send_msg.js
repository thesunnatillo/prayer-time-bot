const getUsersId = require("../database/getUsersId");
require("dotenv").config();

module.exports = async (ctx) => {
    try {
        const admin_msg = ctx.message.text.split(" ")[1];
        if (ctx.from.id == process.env.ADMIN && admin_msg != undefined) {

            const ids = await getUsersId();

            ids.rows.forEach(async (id) => {
                try {
                    await ctx.api.sendMessage(id.telegram_id, admin_msg);
                } catch (err) {
                    console.log('bwb') // bot was blocked
                }
            })
            
        }
    } catch (err) {
        console.log('e')
    }
}


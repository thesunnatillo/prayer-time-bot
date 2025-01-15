const qadaBtn = require("../keyboards/inline/qada.btn")


module.exports = async (ctx) => {

    try {

        const bomdod = ctx.session.bomdod
        const peshin = ctx.session.peshin
        const asr = ctx.session.asr
        const shom = ctx.session.shom
        const xufton = ctx.session.xufton
        
        const [ time, status ] = ctx.callbackQuery.data.split("_")
        
        if (status === "read") {
            ctx.session[time] -= 1

            await ctx.editMessageReplyMarkup({
                reply_markup: qadaBtn([bomdod, peshin, asr, shom, xufton]),
            });
            await ctx.answerCallbackQuery();
        }

        if (status === "unread") {
            ctx.session[time] += 1

            await ctx.editMessageReplyMarkup({
                reply_markup: qadaBtn([bomdod, peshin, asr, shom, xufton]),
            });

            await ctx.answerCallbackQuery();
        }

        

    } catch (err) {
        console.log(err)
    }
}
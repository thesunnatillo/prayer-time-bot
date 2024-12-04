const saveUserQuery = require('../database/saveUserQuery')

module.exports = async (ctx) => {
    const telegram_id = ctx.from.id
    const name = ctx.from.first_name
    const region = ctx.callbackQuery.data

    await saveUserQuery(telegram_id, name, region)
}
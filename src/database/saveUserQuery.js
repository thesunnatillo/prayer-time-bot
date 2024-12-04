const pool = require('./pool')
const findUser = require('./findUser')
const updateRegion = require('./updateRegion')

module.exports = async (telegram_id, name, region) => {
    const user = await findUser(telegram_id)
    const new_data_save_query = `INSERT INTO users (telegram_id, name, region, created_at)
                    VALUES ($1, $2, $3, NOW())`

    if (user.rows.length === 0) {
        const client = await pool.connect()
        try {
            await client.query(new_data_save_query, [telegram_id, name, region])
        } catch (e) {
            console.error('Error saving data:', e.message);
        } finally {
            client.release()
        }
    } else {
        await updateRegion(telegram_id, region)
    }

}
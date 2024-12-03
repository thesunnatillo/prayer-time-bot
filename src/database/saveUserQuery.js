const pool = require('./pool')

module.exports = async (telegram_id, name, region) => {
    const find_user_query = `SELECT * FROM users WHERE telegram_id = `

    const update_region_query = ``

    const new_data_save_query = `INSERT INTO users (telegram_id, name, region, created_at)
                    VALUES ($1, $2, $3, NOW())`

    const client = await pool.connect()
    try {
        await client.query(new_data_save_query, [telegram_id, name, region])
    } catch (e) {
        console.error('Error saving data:', e.message);
    } finally {
        client.release()
    }
}
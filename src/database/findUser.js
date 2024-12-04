const pool = require('./pool')

module.exports = async (telegram_id) => {

    const query = `SELECT * FROM users WHERE telegram_id = ${telegram_id}`
    const client = await pool.connect()
    try {
        return await client.query(query)
    } catch (e) {
        console.error("Error finding data: ", e.message)
    } finally {
        client.release()
    }
}
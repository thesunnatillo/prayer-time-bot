const pool = require('./pool')

module.exports = async () => {

    const query = `SELECT COUNT(*) FROM users;`
    const client = await pool.connect()
    try {
        return await client.query(query).rows[0].count
    } catch (e) {
        console.error("Error finding data: ", e.message)
    } finally {
        client.release()
    }
}
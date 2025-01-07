const pool = require('./pool')

module.exports = async () => {
    const query = `SELECT COUNT(*) FROM users;`
    const client = await pool.connect()
    try {
        const res = await client.query(query)
        if (res.rows.length > 0) {
            return res.rows[0].count
        } else {
            console.error("No data found.")
            return 0
        }
    } catch (e) {
        console.error("Error finding data: ", e.message)
    } finally {
        client.release()
    }
}

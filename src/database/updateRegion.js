const pool = require('./pool')

module.exports = async (telegramId, newRegion) => {
    const query = `
        UPDATE "users"
        SET region = $1
        WHERE telegram_id = $2;
    `;
    const values = [newRegion, telegramId];

    const client = await pool.connect();
    try {
        await client.query(query, values);
    } catch (err) {
        console.error('Error updating region:', err.message);
    } finally {
        client.release();
    }
};

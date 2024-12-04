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
        const result = await client.query(query, values);
        if (result.rowCount > 0) {
            console.log('Region updated successfully!');
        } else {
            console.log('User not found!');
        }
    } catch (err) {
        console.error('Error updating region:', err.message);
    } finally {
        client.release();
    }
};

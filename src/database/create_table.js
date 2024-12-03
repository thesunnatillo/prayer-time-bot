const pool = require('./pool')

module.exports = async () => {
    const query = `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        telegram_id BIGINT NOT NULL,
        name VARCHAR(500) NOT NULL,
        region VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `
    try {
        const client = await pool.connect();
        await client.query(query);
        console.log('Table created successfully!');
        client.release();
    } catch (err) {
        console.error('Error creating table:', err.message);
    }
}
const Sequelize = require('sequelize');
require('dotenv').config(); // Ensure you have dotenv installed and a .env file at your project root if you're using environment variables locally

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // Local database configuration
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306, // Default MySQL port
    });
}

module.exports = sequelize;

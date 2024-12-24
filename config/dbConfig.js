// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(
//     process.env.DB_NAME || 'blog_management',
//     process.env.DB_USER || 'root',
//     process.env.DB_PASSWORD || '',
//     {
//         host: process.env.DB_HOST || 'localhost',
//         port: process.env.DB_PORT || 3306,
//         dialect: 'mysql'
//     }
// );

// module.exports = sequelize;

module.exports = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'blog_management',
    port: process.env.DB_PORT || 3306
};
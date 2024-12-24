const { Sequelize, } = require('sequelize'); 
require('dotenv').config(); 

const sequelize = new Sequelize(
  process.env.DB_NAME || 'blog_management',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  }
);

module.exports = {
  sequelize,
}

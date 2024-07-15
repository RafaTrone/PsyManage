require('dotenv').config();

const  { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DB_NAME, process.env.MYSQL_DB_USER, process.env.MYSQL_DB_PASSWORD, {
    host: process.env.MYSQL_DB_HOST,
    dialect: process.env.MYSQL_DB_DIALECT
}); 

module.exports = sequelize;
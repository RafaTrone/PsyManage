const  { Sequelize } = require('sequelize');

const sequelize = new Sequelize('psymanage_db', 'psymanage_user', 'your_password', {
    host: 'localhost',
    dialect: 'postgres'
}); 

module.exports = sequelize;
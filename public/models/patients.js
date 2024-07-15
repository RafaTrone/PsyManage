const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Patients = sequelize.define('Patients', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Patients;
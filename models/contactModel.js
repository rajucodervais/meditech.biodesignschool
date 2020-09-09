const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('contact', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING(45),
    email: Sequelize.STRING(45),
    subject: Sequelize.STRING(200),
    message: Sequelize.TEXT(1000),
   },
{
    timestamps: true
});
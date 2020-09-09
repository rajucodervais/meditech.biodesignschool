const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('admin', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    // username: Sequelize.STRING(50),
    email: Sequelize.STRING(70),
    first_name: Sequelize.STRING(200),
    last_name: Sequelize.STRING(200),
    password: Sequelize.STRING(200),
    profile_pic: Sequelize.STRING(200)
   },
{
    timestamps: true
});
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: Sequelize.STRING(200),
    slug: Sequelize.STRING(200),
    description: Sequelize.TEXT(5000),
    date_published: Sequelize.DATEONLY,
    from_date: Sequelize.DATEONLY,
    to_date: Sequelize.DATEONLY
   },
{
    timestamps: true
});
const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('upload', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    student_id: {
        type: Sequelize.INTEGER(11),
        references: {
            model: student,
            key: 'id'
        }
    },
    file_url: Sequelize.STRING(200),
    file_name: Sequelize.STRING(200),
    file_size: Sequelize.STRING(45),
    file_type: Sequelize.STRING(45)
   },
{
    timestamps: true
});
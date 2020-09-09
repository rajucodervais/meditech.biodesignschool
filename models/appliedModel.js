const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('applied', {
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
    post_id: {
        type: Sequelize.INTEGER(11),
        references: {
            model: post,
            key: 'id'
        }
    }
   },
{
    timestamps: true
});
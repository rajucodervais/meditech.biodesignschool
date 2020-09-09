const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('stu_education', {
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
    course_name: Sequelize.STRING(250),
    duration_from: Sequelize.DATEONLY,
    duration_to: Sequelize.DATEONLY,
    course_type: Sequelize.STRING(45),
    institute: Sequelize.STRING(250),
    specialization: Sequelize.STRING(200),
    grading_type: Sequelize.STRING(25),
    obtained_mark: Sequelize.DECIMAL(10, 2),
    maximum_mark: Sequelize.DECIMAL(10,2),
    percent: Sequelize.DECIMAL(10, 2),
    board_of_education: Sequelize.STRING(250),
    roll_no: Sequelize.BIGINT(20)
   },
{
    timestamps: true
});
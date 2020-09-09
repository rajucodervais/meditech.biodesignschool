const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    sir_name: Sequelize.STRING(25),
    first_name: Sequelize.STRING(45),
    middle_name: Sequelize.STRING(45),
    last_name: Sequelize.STRING(45),
    father_sir_name: Sequelize.STRING(25),
    father_first_name: Sequelize.STRING(45),
    father_middle_name: Sequelize.STRING(45),
    father_last_name: Sequelize.STRING(45),
    mother_sir_name: Sequelize.STRING(25),
    mother_first_name: Sequelize.STRING(45),
    mother_middle_name: Sequelize.STRING(45),
    mother_last_name: Sequelize.STRING(45),
    dob: Sequelize.DATEONLY,
    gender: Sequelize.STRING(10),
    house: Sequelize.STRING(200),
    street: Sequelize.STRING(200),
    landmark: Sequelize.STRING(150),
    country: Sequelize.STRING(150),
    state: Sequelize.STRING(150),
    city: Sequelize.STRING(150),
    pincode: Sequelize.INTEGER(11),
    current_house: Sequelize.STRING(200),
    current_street: Sequelize.STRING(200),
    current_landmark: Sequelize.STRING(150),
    current_country: Sequelize.STRING(150),
    current_state: Sequelize.STRING(150),
    current_city: Sequelize.STRING(150),
    current_pincode: Sequelize.INTEGER(11),
    email: Sequelize.STRING(45),
    alternate_email: Sequelize.STRING(45),
    mobile: Sequelize.BIGINT(20),
    alternate_mobile: Sequelize.BIGINT(20),
    password: Sequelize.STRING(200),
    registration_no: Sequelize.STRING(45),
    status: Sequelize.TINYINT(1)
   },
    {
    timestamps: true
});
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.PASSWORD, {
    host: process.env.HOST_NAME,
    dialect: 'mysql',
    timezone: "+05:30",
});
if (sequelize) {
    console.log('connected')
}

module.exports = sequelize;
global.sequelize = sequelize;
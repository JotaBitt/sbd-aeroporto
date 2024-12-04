const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aeroporto', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

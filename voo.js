const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Voo = sequelize.define('Voo', {
  numero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horario: {
    type: DataTypes.TIME,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Voo;

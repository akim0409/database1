const { Model, DataTypes }= require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  age: DataTypes.NUMBER
});

sequelize.sync();
// User.sync({ force: true }) // reset the User table

module.exports = User;
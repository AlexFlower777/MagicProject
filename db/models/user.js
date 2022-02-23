'use strict';
const { STRING } = require('sequelize');
const { INTEGER } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cards, Cities }) {
      this.hasMany(Cards, { foreignKey: 'user_id' }),
        this.belongsTo(Cities, { foreignKey: 'city_id' })
    }
  }
  User.init({
    name: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

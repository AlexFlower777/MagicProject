'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Сondition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Card}) {
      this.hasMany(Card, { foreignKey: 'condition_id' })
    }
  }
  Сondition.init({
    condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Сondition',
  });
  return Сondition;
};

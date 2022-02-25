"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ User, Сondition, City }) {
      this.belongsTo(Сondition, { foreignKey: "condition_id" }),
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Card.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.INTEGER,
      condition_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};

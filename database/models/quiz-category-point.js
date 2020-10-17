"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuizCategoryPoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuizCategoryPoint.init(
    {
      CategoryId: { type: DataTypes.INTEGER, primaryKey: true },
      QuizId: { type: DataTypes.INTEGER, primaryKey: true },
      points: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "QuizCategoryPoint",
    }
  );
  return QuizCategoryPoint;
};

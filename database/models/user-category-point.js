"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCategoryPoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCategoryPoint.init(
    {
      CategoryId: { type: DataTypes.INTEGER, primaryKey: true },
      UserId: { type: DataTypes.INTEGER, primaryKey: true },
      UserPoint: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserCategoryPoint",
    }
  );
  return UserCategoryPoint;
};

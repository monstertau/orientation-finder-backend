"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoryCourse.init(
    {
      CategoryId: DataTypes.INTEGER,
      CourseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CategoryCourse",
    }
  );
  return CategoryCourse;
};

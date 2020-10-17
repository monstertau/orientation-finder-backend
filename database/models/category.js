"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Course, { through: "CategoryCourses" });
      Category.belongsToMany(models.Quiz, { through: "QuizCategoryPoints" });
      Category.belongsToMany(models.User, { through: "UserCategoryPoints" });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      intro: DataTypes.STRING,
      salary: DataTypes.STRING,
      grades: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};

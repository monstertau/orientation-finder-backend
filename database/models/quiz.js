"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Quiz.belongsToMany(models.Category, { through: "QuizCategoryPoints" });
    }
  }
  Quiz.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    },
    {
      sequelize,
      modelName: "Quiz",
    }
  );
  return Quiz;
};

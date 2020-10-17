"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable("QuizCategoryPoints", {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      QuizId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Quizzes",
          key: "id",
        },
      },
      points: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("QuizCategoryPoints");
  },
};

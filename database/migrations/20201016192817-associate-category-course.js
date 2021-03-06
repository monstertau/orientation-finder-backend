"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable("CategoryCourses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
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
        foreignKey: true,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      CourseId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: "Courses",
          key: "id",
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("CategoryCourses");
  },
};

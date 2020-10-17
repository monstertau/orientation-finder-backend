"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable("UserCategoryPoints", {
      CategoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      UserId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      UserPoint: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("UserCategoryPoints");
  },
};

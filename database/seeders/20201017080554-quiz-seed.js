"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert("Quizzes", [
        {
          question: "cau 1",
          answer: ["A1", "B1", "C1"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "cau 2",
          answer: ["A2", "B2", "C2"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "cau 3",
          answer: ["A3", "B3", "C3"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
      .then(() => {
        return queryInterface.bulkInsert("QuizCategoryPoints", [
          {
            CategoryId: 1,
            QuizId: 1,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 2,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 1,
            QuizId: 3,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 1,
            points: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 2,
            points: [3, 2, 1],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            QuizId: 3,
            points: [2, 1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Quizzes", null, {}).then(() => {
      return queryInterface.bulkDelete("QuizCategoryPoints", null, {});
    });
  },
};

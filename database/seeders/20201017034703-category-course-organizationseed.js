"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert("Categories", [
        {
          name: "AI",
          intro: "Cool Stuff",
          salary: "20000",
          grades: "29",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
      .then(() => {
        return queryInterface.bulkInsert("Organizations", [
          {
            name: "Udemy",
            phone: "1",
            address: "1",
            description: "1",
            logo: "1",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
      .then(() => {
        return queryInterface.bulkInsert("Courses", [
          {
            name: "UdemyAI1",
            content: "a",
            picture: "a",
            OrganizationId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "UdemyAI1",
            content: "a",
            picture: "a",
            OrganizationId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
      .then(() => {
        return queryInterface.bulkInsert("CategoryCourses", [
          {
            CategoryId: "1",
            CourseId: "1",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: "1",
            CourseId: "2",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkDelete("Categories", null, {})
      .then(() => {
        return queryInterface.bulkDelete("Courses", null, {});
      })
      .then(() => {
        return queryInterface.bulkDelete("Organization", null, {});
      })
      .then(() => {
        return queryInterface.bulkDelete("CategoryCourses", null, {});
      });
  },
};

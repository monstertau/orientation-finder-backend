"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert("Categories", [
        {
          name: "Artificial Intelligence",
          intro:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          salary: `[ { "name": "VinAI", "position": "Data Scientist, Data Engineer" }, { "name": "Viettel", "position": "AI Engineer, Data Engineer" }, { "name": "Samsung R&D", "position": "AI Engineer, Data Engineer" }, { "name": "FPT Software", "position": "AI Engineer, Data Engineer" }, { "name": "IBM Viet Nam", "position": "AI Engineer, Data Engineer" } ]`,
          grades: `[ { "name": "AI & DS - HUST", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - UET", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Software Engineering - FPT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - PTIT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - ACT", "grade": "29.5", "tuitionFeePerYear": 20000000 } ]`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Computer Science",
          intro:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          salary: `[ { "name": "Shopee", "position": "Software Engineer,Backend Developer" }, { "name": "Viettel", "position": "Data Engineer, Backend Developer" }, { "name": "Samsung R&D", "position": "Software Engineer,Data Engineer" }, { "name": "FPT Software", "position": "Software Engineer, Devops" }, { "name": "Misa", "position": "Devops,Backend Developer" } ]`,
          grades: `[ { "name": "Global Developer - MindX", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Computer Science - HUST", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Computer Science - UET", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Software Engineering - FPT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - PTIT", "grade": "29.5", "tuitionFeePerYear": 20000000 } ]`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cyber Security",
          intro:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          salary: `[ { "name": "Viettel", "position": "Network Security Engineer, Malware Engineer" }, { "name": "CMC", "position": "Network Security Engineer, System Security Engineer" }, { "name": "BKAV Group", "position": "Software Engineer,Data Engineer" }, { "name": "VNISA", "position": "Software Engineer, Devops" }, { "name": "VP Bank", "position": "Security Analysis" } ]`,
          grades: `[ { "name": "Cyber Security - HUST", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Cyber Security - FPT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Cyber Security - PTIT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Cyber Security - UIT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Cyber Security - HCMUT", "grade": "29.5", "tuitionFeePerYear": 20000000 } ]`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game Developer",
          intro:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          salary: `[ { "name": "VNG", "position": "Game Developer,Game Designer" }, { "name": "GearInc", "position": "Game Developer,Game Designer" }, { "name": "Gameloft", "position": "Game Developer,Game Designer" }, { "name": "Garena", "position": "Game Developer,Game Designer" }, { "name": "VTC", "position": "Game Developer,Game Designer" } ]`,
          grades: `[ { "name": "Computer Science - HUST", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Software Engineering - FPT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - UET", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - PTIT", "grade": "29.5", "tuitionFeePerYear": 20000000 }, { "name": "Information Technology - ACT", "grade": "29.5", "tuitionFeePerYear": 20000000 } ]`,
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

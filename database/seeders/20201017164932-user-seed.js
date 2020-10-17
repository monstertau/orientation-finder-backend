"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert("Users", [
        {
          name: "Vu Trung Dung",
          email: "trungdungvu172@gmail.com",
          password:
            "$2b$10$aYng9iFbAVBuoZJIZ9pu2emQHBpQkvFMvoVOfIl94OJYmzAX61xLK",
          phone: "0977554906",
          school: "BKHN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vu Minh Hoang",
          email: "minhhoang99@gmail.com",
          password:
            "$2b$10$aYng9iFbAVBuoZJIZ9pu2emQHBpQkvFMvoVOfIl94OJYmzAX61xLK",
          phone: "0977554906",
          school: "DHCN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
      .then(() => {
        return queryInterface.bulkInsert("UserCategoryPoints", [
          {
            CategoryId: 1,
            UserId: 1,
            UserPoint: 25,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            UserId: 1,
            UserPoint: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 3,
            UserId: 1,
            UserPoint: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 4,
            UserId: 1,
            UserPoint: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {}).then(() => {
      return queryInterface.bulkDelete("UserCategoryPoints", null, {});
    });
  },
};

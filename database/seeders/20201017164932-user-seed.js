"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert("Users", [
        {
          name: "test",
          email: "test@gmail.com",
          password:
            "$2b$10$aYng9iFbAVBuoZJIZ9pu2emQHBpQkvFMvoVOfIl94OJYmzAX61xLK",
          phone: "0977554906",
          school: "BKHN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test2",
          email: "test2@gmail.com",
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
            UserPoint: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            CategoryId: 2,
            UserId: 1,
            UserPoint: 4,
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

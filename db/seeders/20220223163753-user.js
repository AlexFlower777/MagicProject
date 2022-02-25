"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          city_id: 1,
          email: "Altair@yandex.ru",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Инга",
          city_id: 2,
          email: "Inga@yandex.ru",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sasha",
          city_id: 3,
          email: "Sasha@yandex.ru",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          city_id: 4,
          email: "HHHH@yandex.ru",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Моника",
          city_id: 5,
          email: "UUUU@yandex.ru",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

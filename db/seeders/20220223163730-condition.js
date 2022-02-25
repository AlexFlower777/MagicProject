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
      "Сonditions",
      [
        {
          condition: "Идеальное",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          condition: "Среднее",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          condition: "Хорошее",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          condition: "Плохое",
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

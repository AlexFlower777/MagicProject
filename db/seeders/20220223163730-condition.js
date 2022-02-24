'use strict';

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
    await queryInterface.bulkInsert('Сonditions', [
      {
        condition: 'Идеально',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        condition: 'Среднее',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        condition: 'Убитое',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        condition: 'хорошее',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

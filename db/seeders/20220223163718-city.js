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
    await queryInterface.bulkInsert('Cities', [
      {
      name: 'Москва',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Санкт-Петербург',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Сочи',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Челябинск',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Тула',
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

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
    await queryInterface.bulkInsert('Cards', [{
      title: 'Дракон',
      image: 'ghdfshdf',
      price: 15,
      condition_id: 2,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Лучник',
      image: 'ghdfshdf',
      price: 20,
      condition_id: 3,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Бомж',
      image: 'ghdfshdf',
      price: 100,
      condition_id: 2,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
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

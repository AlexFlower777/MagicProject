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
      "Cards",
      [
        {
          title: "Ангел Ограничений",
          image:
            "http://media.wizards.com/2017/dw466ytu5_akh/ru_mXn7f6ddvK.png",
          price: 15,
          condition_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Умащенная Процессия",
          image:
            "http://media.wizards.com/2017/dw466ytu5_akh/ru_f5KX1Gl9dX.png",
          price: 20,
          condition_id: 3,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Жрица-Умастительница",
          image:
            "http://media.wizards.com/2017/dw466ytu5_akh/ru_TL4aUcZYQe.png",
          price: 100,
          condition_id: 4,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Приближение Второго Солнца",
          image:
            "http://media.wizards.com/2017/dw466ytu5_akh/ru_MP8K6zdsLw.png",
          price: 100,
          condition_id: 2,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Воздушный Блюститель Мыслей",
          image:
            "http://media.wizards.com/2017/dw466ytu5_akh/ru_PjSRw5MTfR.png",
          price: 100,
          condition_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Спутывающая Мумия",
          image:
            "http://media.wizards.com/2017/dw466ytu5_akh/ru_aWl1bTHboJ.png",
          price: 100,
          condition_id: 2,
          user_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Картуш Сплоченности",
          image:
            "http://media.wizards.com/2017/dw466ytu5_akh/ru_1onFb1U6d2.png",
          price: 100,
          condition_id: 2,
          user_id: 1,
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

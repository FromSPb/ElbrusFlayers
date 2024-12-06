"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          img1: "1.2.2.jpeg",
          animal_id: 1,
        },
        {
          img1: "1.jpg",
          animal_id: 1,
        },
        {
          img1: "2.jpg",
          animal_id: 2,
        },
        {
          img1: "2.2.jpeg",
          animal_id: 2,
        },
        {
          img1: "3.1.jpeg",

          animal_id: 3,
        },
        {
          img1: "3.2.jpg",

          animal_id: 3,
        },
        {
          img1: "4.jpeg",

          animal_id: 4,
        },
        {
          img1: "4.2.jpeg",

          animal_id: 4,
        },
        {
          img1: "8.1.jpg",

          animal_id: 5,
        },
        {
          img1: "8.2.jpg",

          animal_id: 5,
        },
        {
          img1: "8.3.jpg",

          animal_id: 5,
        },
        {
          img1: "9.1.jpeg",

          animal_id: 6,
        },
        {
          img1: "9.2.jpg",

          animal_id: 6,
        },
        {
          img1: "10.1.jpg",

          animal_id: 7,
        },
        {
          img1: "10.2.jpg",

          animal_id: 7,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};

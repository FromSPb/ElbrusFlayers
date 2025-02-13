"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Animals",
      [
        {
          name: "Андрюша",
          type: "Хорек",
          description: "Ну такой вот он хорек,а чо ему",
        },
        {
          name: "Кирюша",
          type: "Крысюк",
          description: "Крысюк домашний, любит чипсы сл вкусом рака мозга",
        },
        {
          name: "Саша",
          type: "Улитка",
          description: "Ну типа улитка на чилле",
        },
        {
          name: "Боба",
          type: "Наш слоняра",
          description: "Это наш слон",
        },
    
      {
       name: 'name',
        type: "Мимик",
        description:"Существо, ключевой и определяющей чертой которого является мимикрия, способность маскироваться под другие предметы или живых существ. ",
      },
      {
        name: 'name',
         type: "Снорк",
         description:"Существа, судя по всему, некогда были людьми, хотя сложно представить, какие условия могут довести человека до подобного состояния.",
       },
       {
        name: 'name',
         type: "Огр",
         description:"Огры злобные, большие, но тупые существа, которые немного напоминают великанов. По большей части Огры – хищники, предпочитающие людей или иные разумные расы.",
       },
       
      ], {});
   
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Animals", null, {});
  },
};

'use strict';

const bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Users', [
      {
        firstname:'John',
        lastname:'Doe',
        email:'john.doe@mail.com',
        password:bcrypt.hashSync('secret',10),
        gender:'male'
      },
      {
        firstname:'Johny',
        lastname:'Doey',
        email:'johny.doey@mail.com',
        password:bcrypt.hashSync('secret',10),
        gender:'male'
      },
    ])
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};

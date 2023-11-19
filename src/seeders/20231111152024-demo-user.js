'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [
      {userName: 'John Doe',password: '123456',email: 'John123@gmail.com'},
      {userName: 'khang',password: '123456',email: 'khang12123@gmail.com'}
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

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', 
    [
      {
        name: 'Mars Venus',
        email: 'mars@skeleton.com',
        password: 'secret',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Saturn Neptune',
        email: 'saturn@skeleton.com',
        password: 'secret',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Pluto Uranus',
        email: 'pluto@skeleton.com',
        password: 'secret',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
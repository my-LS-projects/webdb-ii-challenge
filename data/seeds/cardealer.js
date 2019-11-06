
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cardealer').insert([
        {
          id: 1, 
          VIN: 'rowValue1',
          make: 'Mitsubish',
          model: 'Lancer',
          mileage: '60000'
        },
      ]);
    });
};
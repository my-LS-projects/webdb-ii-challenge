// changes to make
exports.up = function(knex) {
    return knex.schema.createTable('cardealer', function(table) {
        table.increments(); // creates primary key called id
        table.enum('VIN', 50).notNullable();
        table.string('make', 20).notNullable(); // creates a text field called make
        table.string('model', 50).notNullable();
        table.integer('mileage', 1000000).notNullable();
        table.integer('year', 4);
        table.string('title', 20);
        table.timestamps(true, true);
    })
};

// how to undo changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cardealer')
};

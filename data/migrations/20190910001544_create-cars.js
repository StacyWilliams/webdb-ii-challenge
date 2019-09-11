// changes we want to make
exports.up = function(knex) {
  // create a table called fruits
  return knex.schema.createTable('cars', tbl => {
    // id, primary key, auto-increment, integer
    tbl.increments(); // defaults to 'id'

    tbl
      .string('vin', 26)
      .unique()
      .notNullable();

    tbl
    .string('make', 50)
    .notNullable();

    tbl
      .string('model', 26)
      .notNullable();

    tbl
      .string('mileage', 15)
      .notNullable();

    tbl
      .string('transmission', 26)
      .notNullable();
     tbl
      .string('titleStatus', 26)
      .notNullable();
  });
  
};

// to revert the changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
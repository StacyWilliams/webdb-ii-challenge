
exports.up = function(knex) {
  return knex('cars').del()
  .then(function() {
      return knex('cars').insert([
          {
              id: 1,
              vin: "3FAP0PFKKEIMD80980",
              make: "Oldsmobile",
              model: "88",
              mileage: 78632,
              transmission: "manual",
              titleStatus: "clean"
          },
          {
            id: 2,
            vin: "8HUK65KEIMD80980",
            make: "Plymonth",
            model: "Shiny",
            mileage: 143245,
            transmission: "manual",
            titleStatus: "clean"
        },
        {
            id: 3,
            vin: "378GK80EIMD80980",
            make: "Ford",
            model: "Mustang",
            mileage: 143256,
            transmission: "automatic",
            titleStatus: "clean"
        },
      ])
  })
};

exports.down = function(knex) {
  
};

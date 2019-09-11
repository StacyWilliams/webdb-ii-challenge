const express = require('express');
const router = express.Router();
const db = require('../data/db-config.js');




router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ message: 'error getting the car from db' });
    });
}); //endpoint working

router.get('/:id', (req, res) => {
    db('cars')
      .where({ id: req.params.id })
      .first()
      .then(car => {
        res.status(200).json(car);
      })
      .catch(error => {
        res.status(500).json({ message: 'error getting the car from db' });
      });
}); //endpoint works

router.post('/', (req, res) => {
    const car = req.body;
    db('cars')
      .insert(car, 'id')
      .then(car => {
        res.status(200).json(car);
      })
      .catch(error => {
        res.status(500).json({ message: 'error saving the car to the db' });
      });
}); //endpoint works

router.put('/:id', (req, res) => {
    const changes = req.body;
  
    db('cars')
      .where('id', '=', req.params.id)
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({ message: 'not found' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'error updating the car' });
      });
}); //endpoint works

router.delete('/:id', (req, res) => {
    db('cars')
      .where({id:req.params.id})
      .del()
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({ message: 'not found' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'error removing the car' });
      });
}); //endpoint works

module.exports = router;
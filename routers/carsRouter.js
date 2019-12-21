const express = require('express')
const db = require('../data/dbConfig.js')
const router = express.Router()

router.get('/', ( req, res ) => {
    db.select('*')
    .from('cardealer')
    .then(cars => res.status(200).json(cars))
    .catch(error => res.status(500).json({ error: "error" }))
})

router.get('/:id', ( req, res ) => {
    db.select('*')
    .from('cardealer')
    .where({ id: req.params.id })
    .then(cars => res.status(200).json(cars))
    .catch(error => res.status(500).json({ error: "error" }))
})

router.post('/', ( req, res) => {
    if (req.body.make, req.body.model, req.body.mileage, req.body.vin )
    db.insert(req.body)
    .into('cardealer')
    .then(car => res.status(200).json({ message: 'car added' }))
    .catch(error => res.status(500).json({ error: "error" }))
})

module.exports = router;
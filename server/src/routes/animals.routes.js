const AnimalController = require('../controllers/Animal.controller')

const router = require('express').Router()

router.get('/',AnimalController.getAnimals),
router.post('/',AnimalController.createAnimal)
router.put('/:id',AnimalController.updateAnimal)

module.exports = router
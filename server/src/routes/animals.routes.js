const AnimalController = require('../controllers/Animal.controller')
const multerMiddleware = require('../middleware/multer')


const router = require('express').Router()

router.get('/',AnimalController.getAnimals)
.get('/:id',AnimalController.getAnimalById)
.post('/',multerMiddleware.single('animalImg'),AnimalController.createAnimal)
.put('/:id',AnimalController.updateAnimal)
.delete('/:id',AnimalController.deleteAnimal)


module.exports = router
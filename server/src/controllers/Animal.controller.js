const AnimalService = require("../services/Animals.service");
const AnimalValidator = require("../utils/AnimalValidator");
const formatResponse = require("../utils/formatResponse");
class AnimalController {
  static async getAnimals(req, res) {
    try {
      const animalFromDb = await AnimalService.get();
      if (!animalFromDb) {
        return res
          .status(404)
          .json(
            formatResponse(
              404,
              "Not found animal in DB",
              null,
              "Not found animal in DB"
            )
          );
      }

      res.status(200).json(formatResponse(200, "success", animalFromDb));
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, "Server error", null, message));
    }
  }
  static async createAnimal(req, res) {
    const { name, type, description } = req.body;
    const { isValid, error } = AnimalValidator.validate({
      name,
      type,
      description,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }
    try {
      const newAnimal = await AnimalService.create({ name, type, description });
      res.status(201).json(formatResponse(201, "Success create", newAnimal));
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, "Server error", null, message));
    }
  }
  static async updateAnimal(req, res) {
    const { id } = req.params;
    const { name, type, description } = req.body;
    const { isValid, error } =  AnimalValidator.validate({ name, type, description });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }
    try {
      const updatedAnimal = await AnimalService.update(id,{name,type,description})
      res.status(200).json(formatResponse(200,'Success update',updatedAnimal))
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, "Server error", null, message));
    }
  }
}
module.exports = AnimalController;

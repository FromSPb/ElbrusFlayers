const AnimalService = require("../services/Animals.service");
const ImageService = require("../services/Image.service");
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
  static async getAnimalById(req, res) {
    const { id } = req.params;
    try {
      const animal = await AnimalService.getById(id);
      res.status(200).json(formatResponse(200, "success", animal));
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, "Server error", null, message));
    }
  }
  static async createAnimal(req, res) {
    console.log(req.body.name,'---');
    console.log(req.file);

    // console.log(req.body.animalImg);

    const { name, type, description } = req.body;
    const{filename} = req.file

    const { isValid, error } = AnimalValidator.validate({
      name,
      type,
      description,
    });
    if(!filename){
      return res
      .status(400)
      .json(formatResponse(400, "No images", null, error));
    }
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }
    try {
      const newAnimal = await AnimalService.create({ name, type, description });
      const newAnimalImg = await ImageService.addImage(newAnimal.id,filename)
      console.log(newAnimalImg);

      const animalToClient = newAnimal.get()
      const animalImgToClient = newAnimalImg.get()

      animalToClient.Images = [animalImgToClient]
      
      res.status(201).json(formatResponse(201, "Success create", animalToClient));
     
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, "Server error", null, message));
    }
  }
  static async updateAnimal(req, res) {
    const { id } = req.params;
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
      const updatedAnimal = await AnimalService.update(id, {
        name,
        type,
        description,
      });
      // const updateImage = await A
      if (!updatedAnimal) {
        return res
          .status(404)
          .json(formatResponse(404, `Not found animal with id ${id}`));
      }
      res
        .status(200)
        .json(formatResponse(200, "Success update", updatedAnimal));
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, "Server error", null, message));
    }
  }
  static async deleteAnimal(req, res) {
    const { id } = req.params;

    try {
      const deleteAnimal = await AnimalService.delete(+id);

      if (!deleteAnimal) {
        return res
          .status(404)
          .json(formatResponse(404, `Animal with id ${id} not found`));
      }
      res.status(200).json(formatResponse(200, "Success delete", deleteAnimal));
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, "Server error", null, message));
    }
  }
}
module.exports = AnimalController;

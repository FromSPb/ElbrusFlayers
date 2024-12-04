const { Animal } = require("../db/models");
const {Image} = require("../db/models/");

class AnimalService {
  static async get() {
    return await Animal.findAll({ include: [{ model: Image }] });
  }
  static async create(data){
   return await Animal.create(data)
    // return await newAnimal
  }
  static async update(id,data){
    return await Animal.update(id,data)
  }
}
module.exports = AnimalService;

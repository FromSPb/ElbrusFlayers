import React from "react";
import { useState } from "react";
import { message as antMessage, Button, Input } from "antd";
import AnimalApi from "../../Entites/Animals/AnimalApi";

function AnimalsFormUpdate({ animal, setAnimals, setShowUpdateForm }) {
  const [inputs, setInputs] = useState({
    name: animal.name,
    type: animal.type,
    description: animal.description,
  });
  
  const isEmptyFormData =
    inputs.name.trim().length === 0 ||
    inputs.type.trim().length === 0 ||
    inputs.description.trim().length === 0;

  function changeInputs({ target }) {
    const { value, name } = target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  async function sendInputs() {
    if (isEmptyFormData) {
      antMessage.error('Все поля обязательны к заполнению');
      return;
    }
    try {
      const { data, message, error, statusCode } = await AnimalApi.updateAnimal(
        animal.id,
        inputs
      );
      if (error) {
        antMessage.error(error);
        return;
      }
      if (statusCode === 200) {
        setAnimals((prev) => prev.map((el) => (el.id === data.id ? data : el)));
        setInputs({ name: "", type: "", description: "" });
        setShowUpdateForm(false);
      }
    } catch (error) {
      antMessage.error(error.message);
      console.log(error);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Input
        name="name"
        value={inputs.name}
        placeholder="Имя"
        onChange={changeInputs}
      />
      <Input
        name="type"
        value={inputs.type}
        placeholder="Тип"
        onChange={changeInputs}
      />
      <Input
        name="description"
        value={inputs.description}
        placeholder="Описание"
        onChange={changeInputs}
      />
      <Button type="primary" onClick={sendInputs}>
        Отправить изменения
      </Button>
    </div>
  );
}

export default AnimalsFormUpdate;
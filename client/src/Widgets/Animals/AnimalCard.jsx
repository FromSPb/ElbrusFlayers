import React, { useRef, useState } from "react";
import { Card, Button, Modal, Form, Input } from "antd";
import AnimalApi from "../../Entites/Animals/AnimalApi";
import { message as antMessage } from "antd";
import AnimalsFormUpdate from "../AnimalsFormUpdate/AnimalsFormUpdate";
import MiniSlider from "./MiniSlider";


const { Meta } = Card;

function AnimalCard({ user, animal, setAnimals }) {
  const [img, setImg] = useState(null);
  const fileInputRef = useRef(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = async () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  async function deleteAnimal() {
    try {
      const { data, statusCode, message } = await AnimalApi.deleteAnimalById(animal.id);
      if (statusCode === 200) {
        setAnimals((prev) => prev.filter((el) => el.id !== data.id));
        antMessage.success(message);
      }
    } catch (error) {
      antMessage.error(error);
    }
  }

  async function addImg() {
    try {
      const formData = new FormData();
      formData.append("animalImg", img);
      const { data } = await AnimalApi.uploadAnimalPhoto(animal.id, formData);
      antMessage.success("Изображение добавлено успешно.");
    } catch (error) {
      antMessage.error(error);
    }
  }

  return (
    <>
      <Card
        hoverable
        onClick={openModal}
        style={{
          width: 250,
          margin: "10px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}

        cover={<img alt="example" src={`${import.meta.env.VITE_API}images/${animal?.Images[0]?.img1}`} />}
      >
        <Meta title={<span>{animal?.name}</span>} description={<span>{animal?.type}</span>} />

      </Card>

      <Modal
        title={
          <h2>
            {animal?.type}: ({animal?.name})
          </h2>
        }
        footer={
          user?.role === 'admin' && (
            <div>
              <input
                type="file"
                name="animalImg"
                onChange={(e) => setImg(e.target.files[0])}
                ref={fileInputRef}
              />
              <Button type="primary" onClick={addImg}>
                Добавить фото
              </Button>
              <Button
                type="primary"
                onClick={() => setShowUpdateForm((prev) => !prev)}
              >
                {showUpdateForm ? 'Скрыть' : 'Изменить'}
              </Button>
              <Button type="danger" onClick={deleteAnimal}>
                Удалить
              </Button>
              {showUpdateForm && <AnimalsFormUpdate animal={animal} setAnimals={setAnimals} setShowUpdateForm={setShowUpdateForm} />}
            </div>
          )
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <MiniSlider images={animal?.Images} />
        <p>{animal.description}</p>
      </Modal>
    </>
  );
}

export default AnimalCard;
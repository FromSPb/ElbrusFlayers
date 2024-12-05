import React, { useRef, useState } from "react";
const { Meta } = Card;
import { Button, Card, Modal } from "antd";
import AnimalApi from "../../Entites/Animals/AnimalApi";
import { message as antMessage } from "antd";

function AnimalCard({ animal, setAnimals }) {
  const [img, setImg] = useState(null);
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);

  const [faf, setFaf] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = async () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // setFaf((prev) => !prev);
  };

  async function deleteAnimal(params) {
    try {
      const { data, statusCode, error, message } =
        await AnimalApi.deleteAnimalById(animal.id);
      if (statusCode === 200) {
        setAnimals((prev) => prev.filter((el) => el.id !== data.id));
        antMessage.success(message);
      }
    } catch (error) {
      antMessage.error(error);
      return;
    }
  }
  async function addImg(params) {
    try {
      const formData = new FormData()
      formData.append('animalImg',img)
      const {data} = await AnimalApi.uploadAnimalPhoto(animal.id,formData)
      console.log(data.data.img1,123);
      setAvatar(data.data.img1)
    } catch (error) {
      antMessage.error(error);
      return;
    }
  }
  console.log(animal.Images[3].img1);
  console.log(import.meta.env.VITE_API,44);
  console.log(animal,444);
  
  
  return (
    <>
    <div>{animal.Images[3].img1}</div>
    <img src={`${import.meta.env.VITE_API}images/${animal.Images[3].img1}`} width='40' />
      <Card
        hoverable
        onClick={openModal}
        style={{
          width: 250,
          margin: "10px",
        }}
        cover={<img alt="example" src={animal.Images[0].img1} />}
      >
        <Meta
          title={<span>{animal.name}</span>}
          description={<span>{animal.type}</span>}
        />
      </Card>
      <Modal
        title={
          <h2>
            {animal.type}: ({animal.name})
          </h2>
        }
        footer={
          <div>
            {/* <Button type="primary">Добавить фото</Button> */}
            <input
            type="file"
            name="animalImg"
            onChange={(e) => setImg(e.target.files[0])}
            ref={fileInputRef} 
          />
          <Button type="primary" onClick={addImg}>добавить</Button>
            <Button type="primary">Изменить</Button>
            <Button type="primary" onClick={deleteAnimal}>
              Удалить
            </Button>
          </div>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <p>{animal.description}</p>
        <img src={`${animal.Images[0].img1}`}></img>
      </Modal>

      {/* {animal.name}
      {animal.type}
      <button onClick={click}>изменить</button>
      {faf === true && <h1>1</h1>} */}
    </>
  );
}

export default AnimalCard;

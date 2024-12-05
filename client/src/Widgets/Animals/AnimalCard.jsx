import React, { useState } from "react";
const { Meta } = Card;
import { Button, Card, Modal } from "antd";

function AnimalCard({ animal }) {
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

  return (
    <>
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
            <Button type="primary">Изменить</Button>
            <Button type="primary">Удалить</Button>
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

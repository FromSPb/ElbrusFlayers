import React, { useRef, useState } from "react";
import { Button, Card, Modal, Form, Input, Upload } from "antd"; // Импортируйте необходимые компоненты Ant Design
import AnimalApi from "../../Entites/Animals/AnimalApi";
import { message as antMessage } from "antd";

function AnimalCreateForm({ setAnimals }) {
  const [img, setImg] = useState(null);
  const [inputs, setInputs] = useState({ name: '', type: '', description: '' });

  const onFinish = async () => {
    if (img) {
      const formData = new FormData();
      formData.append("animalImg", img);
      formData.append("name", inputs.name);
      formData.append("type", inputs.type);
      formData.append("description", inputs.description);

      try {
        const { data } = await AnimalApi.createAnimal(formData);
        setAnimals((prev) => [...prev, data]);
        setInputs({ name: '', type: '', description: '' });
        setImg(null);
        antMessage.success('Животное добавлено');
      } catch (error) {
        antMessage.error(error.message);
      }
    } else {
      antMessage.error('Выберите изображение!');
    }
  };

  return (
    <Card title="Добавить животное" style={{ marginBottom: '20px' }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Имя" required>
          <Input value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
        </Form.Item>
        <Form.Item label="Тип" required>
          <Input value={inputs.type} onChange={(e) => setInputs({ ...inputs, type: e.target.value })} />
        </Form.Item>
        <Form.Item label="Описание" required>
          <Input.TextArea value={inputs.description} onChange={(e) => setInputs({ ...inputs, description: e.target.value })} />
        </Form.Item>
        <Form.Item label="Изображение" required>
          <Upload beforeUpload={(file) => { setImg(file); return false; }}>
            <Button>Выберите изображение</Button>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit">Добавить животное</Button>
      </Form>
    </Card>
  );
}

export default AnimalCreateForm;
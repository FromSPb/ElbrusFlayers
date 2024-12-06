import { useEffect, useState } from "react";
import { axiosInstance } from "../../Shared/lib/axiosInstance";
import AnimalCard from "./AnimalCard";
import AnimalCreateForm from "../AnimalCreateForm/AnimalCreateForm";
import './AnimalList.css'; // Добавим файл стилей

function AnimalList({ user }) {
  const [animals, setAnimals] = useState([]);

  const loadAnimals = async () => {
    const {
      data: { data },
    } = await axiosInstance.get("/animals");
    setAnimals(data);
  };

  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <>

      {user?.role === 'admin' && <AnimalCreateForm setAnimals={setAnimals} />}
      <div className="animal-list">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} setAnimals={setAnimals} user={user} />
        ))}
      </div>

    </>
  );
}

export default AnimalList;
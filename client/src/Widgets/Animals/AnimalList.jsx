import { useEffect, useState } from "react";
import { axiosInstance } from "../../Shared/lib/axiosInstance";
import AnimalCard from "./AnimalCard";

function AnimalList(props) {
  const [animals, setAnimals] = useState([]);
  const loadAnimals = async () => {
    const {
      data: { data },
    } = await axiosInstance.get("/animals");
    setAnimals(data);
    console.log(data, 111);
    console.log(animals, 222);
    
  };
  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <>
      {animals.map((animal) => (
        <AnimalCard animal={animal} />
      ))}
    </>
  );
}

export default AnimalList;

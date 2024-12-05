import React from "react";
import MiniSlider from "./MiniSlider";

const images = [
  "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
  "https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaW4xxOX6qc38S-GLc2S5suBY92GVfmFN1Q&s",
];

const Card = () => {
  return (
    <div style={{ width: "300px", border: "1px solid black", padding: "10px" }}>
      <h3>Card Title</h3>
      <MiniSlider images={images} />
    </div>
  );
};

export default Card;
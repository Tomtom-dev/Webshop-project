import React, { useState, useEffect } from "react";
import Axios from "axios";
import ClothesCard from "../components/ClothesCard";

export default function HomePage() {
  let [clothes, setClothes] = useState([]);
  const [clothesWoman, setClothesWoman] = useState([]);
  const [clothesMan, setClothesMan] = useState([]);

  useEffect(() => {
    async function fetchClothes() {
      const data = await Axios.get(
        "https://my-json-server.typicode.com/Tomtom-dev/JsonFileWebShop/db"
      );
      console.log("this is the man clothing", data.data.manClothing);
      console.log("this is the woman clothing", data.data.womanClothing);

      setClothesMan(data.data.manClothing);
      setClothesWoman(data.data.womanClothing);
    }
    fetchClothes();
  }, []);

  clothes = [...clothesMan, ...clothesWoman];

  return (
    <div>
      {clothes.map((item) => {
        return (
          <ClothesCard
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

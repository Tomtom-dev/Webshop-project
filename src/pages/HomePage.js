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
  const clothesArrayCopy = [...clothes];

  // const clothesTest =
  // console.log("what is clothes ?", clothesTest);

  const sortedByPrice = clothesArrayCopy.sort(function sortByPrice(
    priceA,
    priceB
  ) {
    return priceB.price - priceA.price;
  });

  // const sortedItemsByPrice= "array".sort(sortByPrice)

  const sortedByPopularity = clothesArrayCopy.sort(function sortByPopularity(
    boughtA,
    boughtB
  ) {
    return boughtB.bought - boughtA.bought;
  });

  return (
    <div>
      <p>
        Sort by : <button>price</button> | <button>popularity</button>
      </p>
      {clothes.map((item) => {
        return (
          <div>
            <ClothesCard
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              category={item.category}
              price={item.price}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
}

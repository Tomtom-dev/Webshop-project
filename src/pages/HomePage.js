import React, { useState, useEffect } from "react";
import Axios from "axios";
import ClothesCard from "../components/ClothesCard";
import '../style/HomePage.css'

export default function HomePage() {
  let [clothes, setClothes] = useState([]);
  const [clothesWoman, setClothesWoman] = useState([]);
  const [clothesMan, setClothesMan] = useState([]);
  const [sort_by, set_sort_by] = useState([]); 

  useEffect(() => {
    async function fetchClothes() {
      const data = await Axios.get(
        "https://my-json-server.typicode.com/Tomtom-dev/JsonFileWebShop/db"
      );
      // console.log("this is the man clothing", data.data.manClothing);
      // console.log("this is the woman clothing", data.data.womanClothing);
      setClothesMan(data.data.manClothing);
      setClothesWoman(data.data.womanClothing);
    }
    fetchClothes();
  }, []);

  clothes = [...clothesMan, ...clothesWoman];
  const clothesArrayCopy = [...clothes];

  // console.log("the DATA",clothesArrayCopy);
  
  function sortedByPrice (){
    const comparePrice = function(priceA,priceB){
      return priceA.price - priceB.price }
    const sortedByPrice = clothesArrayCopy.sort(comparePrice)
    // console.log('price', sortedByPrice);
    return sortedByPrice;
  }
    
  function popularity (){
    const comparePopularity = function( boughtA,boughtB){
      return boughtB.bought - boughtA.bought;}
      const sortedByPopularity= clothesArrayCopy.sort(comparePopularity)
      // console.log('pop', sortedByPopularity);
      return sortedByPopularity;
    }
    

    const change_sorting = event => {
      set_sort_by(event.target.value);
    };

    const playersSorted = (sort_by === "Popularitity") ? popularity() :sortedByPrice()

  
  return (
    <div>
      <p>
        <label>Sort by: {""}</label>
        <select onChange={change_sorting}className="select-css">
              <option value="priceOrder" >price</option> | 
              <option value="Popularitity" >popularity</option>
        </select>
        {/* <button onClick={sortedByPrice}>Price</button>
        <button onClick={popularity}>popularity</button> */}
        
      </p>
      {playersSorted.map((item) => {
        return (
          <div key={item.id} >
            <ClothesCard 
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
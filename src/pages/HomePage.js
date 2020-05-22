import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchProducts } from '../store/action'
import {getAllProducts} from '../store/selectors'
import '../style/HomePage.css'

import ClothesCard from "../components/ClothesCard";

export default function HomePage() {
  let [clothes, setClothes] = useState([]);
  const [clothesWoman, setClothesWoman] = useState([]);
  const [clothesMan, setClothesMan] = useState([]);
  const [sort_by, set_sort_by] = useState([]); 
  const reduxProducts =useSelector(getAllProducts)

  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
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
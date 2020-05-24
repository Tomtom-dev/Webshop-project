import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchProducts } from '../store/action'
import {getAllProducts} from '../store/selectors'
import {addToCart} from '../cart/action'
import '../style/HomePage.css'

import ClothesCard from "../components/ClothesCard";

export default function HomePage() {

  const [sort_by, set_sort_by] = useState([]); 

  const reduxProducts =useSelector(getAllProducts)
  const dispatch= useDispatch();

  // console.log('products in component',reduxProducts.manClothing);
  
  useEffect(() => {
    dispatch(fetchProducts()) // dipatch here to avoid infinite loop
  }, [dispatch]);

  const ArrayOfProducts = [...reduxProducts.manClothing,...reduxProducts.womanClothing]
  const copyArrayProduct = [...ArrayOfProducts]
  
  function sortedByPrice (){
    const comparePrice = function(priceA,priceB){
      return priceA.price - priceB.price }
    const sortedByPrice = copyArrayProduct.sort(comparePrice)
    // console.log('price', sortedByPrice);
    return sortedByPrice;
  }
    
  function popularity (){
    const comparePopularity = function( boughtA,boughtB){
      return boughtB.bought - boughtA.bought;}
      const sortedByPopularity= copyArrayProduct.sort(comparePopularity)
      // console.log('pop', sortedByPopularity);
      return sortedByPopularity;
    }
    

    const change_sorting = event => {
      set_sort_by(event.target.value);
    };

    const playersSorted = (sort_by === "Popularitity") ? popularity() :sortedByPrice()

    function onAddClick (product){
      console.log('trying to add product ', product);
      
      dispatch(addToCart(product))
    }
  
  return (
    <div>
      <p>
        <label>Sort by: {""}</label>
        <select onChange={change_sorting}className="select-css">
              <option value="priceOrder" >price</option> | 
              <option value="Popularitity" >popularity</option>
        </select>
        
      </p>
      {playersSorted.map((item) => {
        return (
          <div key={item.id} >
            <ClothesCard 
              imageUrl={item.imageUrl}
              name={item.name}
              category={item.category}
              price={item.price}
              onAddClick ={() => onAddClick(item)}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
    
    }
import React from "react";
import { Link } from "react-router-dom";

import {uniqueItemsInCart,amountOfItemsInCart} from '../cart/selector'
import '../style/Header.css'
import { useSelector } from "react-redux";
// import { selectUsers } from "../store/selectors";
// import { useSelector } from "react-redux";


export default function Header() {
  // const user = useSelector(selectUsers);

  const amounthOfUniqueItem = useSelector( uniqueItemsInCart)
  

  return (
    <div>
      <header className='test'>
        <Link to="/">
          <button style={{marginRight:"100 px"}} className="Button">Home</button>
        </Link>
        <Link to="/cart">
          <button style={{textAlign:'right'}}className="Button">Cart {amounthOfUniqueItem} item(s)</button>
        </Link>
      </header>
    </div>
  );
}

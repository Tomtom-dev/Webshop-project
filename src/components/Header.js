import React from "react";
import { Link } from "react-router-dom";
import '../style/Header.css'
// import { selectUsers } from "../store/selectors";
// import { useSelector } from "react-redux";

export default function Header() {
  // const user = useSelector(selectUsers);

  return (
    <div>
      <header className='test'>
        <Link to="/">
          <button style={{marginRight:"100 px"}} className="Button">Home</button>
        </Link>
        <Link to="/cart">
          <button style={{textAlign:'right'}}className="Button">Cart () item(s)</button>
        </Link>
      </header>
    </div>
  );
}

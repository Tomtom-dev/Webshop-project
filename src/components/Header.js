import React from "react";
import { Link } from "react-router-dom";
// import { selectUsers } from "../store/selectors";
// import { useSelector } from "react-redux";

export default function Header() {
  // const user = useSelector(selectUsers);

  return (
    <div>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </header>
    </div>
  );
}

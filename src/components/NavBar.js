import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLink() {
  return (
    <div className="HeaderLink">
      <NavLink
        style={{
          textDecoration: "none",
          color: "#2c7624",
          textAlign:"left",
        }}
        to="/"
        exact
      >
        <h2>Clothes Shop</h2>
      </NavLink>
    </div>
  );
}
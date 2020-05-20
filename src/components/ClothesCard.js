import React from "react";
import "../style/ClothesCard.css";
// import { useSelector } from "react-redux";

// function selectArticle(reduxState) {
//   console.log("show us the redux STATE!", reduxState);
// }

export default function ClothesCard(props) {
  // const clothes = useSelector(selectArticle);
  // console.log("clothes in component", clothes);
  const { id, name, category, price } = props;

  return (
    <div key={id} className="ClothesCard">
      <h3>{name}</h3>
      {price}
      {category}
      <br />
    </div>
  );
}

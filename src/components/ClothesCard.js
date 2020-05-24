import React from "react";
import "../style/ClothesCard.css";
// import { useSelector } from "react-redux";

// function selectArticle(reduxState) {
//   console.log("show us the redux STATE!", reduxState);
// }

export default function ClothesCard(props) {
  // const clothes = useSelector(selectArticle);
  // console.log("clothes in component", clothes);
  const { id, name, category, price, imageUrl } = props;

  return (
  <div key={id} className="ClothesCard">
        <img src={imageUrl} alt="Article thumbnail" className="myImage" />
        <div className="productInfo">
          <p>
            <b>{name}</b>
            <br />€ {price},
            <br />
            {category}
          </p>
          <button className="myButton" onClick={() => console.log('add to cart')}
          onClick={props.onAddClick}>
            Add to cart
          </button>
          <button className="myButton" onClick={() => console.log('remove from cart')}>
            Remove
          </button>
        </div>
  </div>
  );
}

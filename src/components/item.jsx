import "./item.css";
import QuantityPicker from "./quantityPicker";
import React, { useState } from "react";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    console.log(`Added to Cart: ${quantity}`);
  };

  const handleQuantityChange = (amount) => {
    console.log(`Quantity Change: ${amount}`);
    setQuantity(amount);
  };

  const getTotal = () => {
    let price = props.data.price;
    let total = price * quantity;
    return total.toFixed(2);
  };

  return (
    <div className="item">
      <div className="img">
        <img src={"/img/" + props.data.image} alt={props.data.category} />
      </div>

      <p>{props.data.title}</p>

      <div className="price-box">
        <label className="price">$ {props.data.price.toFixed(2)}</label>
        <div className="total">
          <label>Total:</label> <label>$ {getTotal()}</label>
        </div>
      </div>

      <div className="item-controls">
        <QuantityPicker onChange={handleQuantityChange} />

        <button onClick={handleAdd} className="btn btn-sm btn-secondary">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;

import "./item.css";
import QuantityPicker from "./quantityPicker";
import React, { useState, useContext } from "react";
import storeContext from "../context/storeContext";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addProductToCart = useContext(storeContext).addProductToCart;
  const cart = useContext(storeContext).cart;

  const handleAdd = () => {
    // console.log(`Added to Cart: ` + [...cart]);
    let prodForCart = {
      ...props.data,
      quantity, // same as => quantity: quantity
    };
    addProductToCart(prodForCart);
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

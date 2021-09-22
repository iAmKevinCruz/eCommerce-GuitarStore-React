import React, { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    id: 1234,
    name: "Kevin Cruz",
    email: "me@kevincruz.dev",
  });

  const addToCart = (product) => {
    // console.log("adding to cart: ", product);
    let copy = [...cart];
    let found = false;
    for (let i = 0; i < copy.length; i++) {
      let prod = copy[i];
      if (product._id === prod._id) {
        found = true;
        prod.quantity += product.quantity;
        console.log("found it");
      }
    }
    if (!found) {
      console.log("adding this new item to cart");
      copy.push(product);
    }
    console.log(copy);
    setCart(copy);
  };

  const removeFromCart = (productId) => {
    console.log("removing: ", productId);
  };

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addToCart,
        removeProductFromCart: removeFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalState;

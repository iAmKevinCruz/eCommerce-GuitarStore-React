import { useContext } from "react/cjs/react.development";
import storeContext from "../context/storeContext";
import Item from "./item";
import "./cart.css";
import CartItem from "./cartItem";

const Cart = () => {
  const cart = useContext(storeContext).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.price * prod.quantity;
    }
    return total.toFixed(2);
  };

  if (!cart.length) {
    return (
      <div>
        <img src="/img/empty-cart.png" alt="" />
        <h2>No Items In The Cart</h2>
        <h6>Check the catalog and pick some</h6>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h1>Let's Finish Your Order!</h1>
      <h5>You have {cart.length} items in your cart.</h5>
      <hr />
      <div className="row">
        <div className="cart-container col-10">
          {cart.map((prod) => (
            <CartItem key={prod._id} data={prod} />
          ))}
        </div>

        <div className="total-container col-2">
          <h4>Order Total:</h4>
          <h3>$ {getTotal()}</h3>
          <hr />
          <button className="btn btn-block btn-primary">Submit Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

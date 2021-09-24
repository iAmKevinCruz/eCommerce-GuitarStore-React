import "./cartItem.css";

const CartItem = (props) => {
  const getTotal = () => {
    let total = props.data.quantity * props.data.price;
    return total.toFixed(2);
  };

  return (
    <div className="cart-item mb-2 row">
      <div className="cart-img col-1">
        <img src={"/img/" + props.data.image} alt="" />
      </div>
      <div className="cart-text col-6">
        <h6>{props.data.title}</h6>
        <label>
          {props.data.category.charAt(0).toUpperCase() +
            props.data.category.slice(1)}
        </label>
      </div>
      <div className="cart-price ms-3 col-1">
        <h6>Price</h6>
        <h6>$ {props.data.price}</h6>
      </div>
      <div className="cart-quantity ms-3 col-1">
        <h6>Quantity</h6>
        <h6>{props.data.quantity}</h6>
      </div>
      <div className="cart-total ms-3 col-1">
        <h6>Total</h6>
        <h6>$ {getTotal()}</h6>
      </div>
      <div className="cart-del-btn ms-3 col-1">
        <buttton className="btn btn-danger btn-sm">Delete</buttton>
      </div>
    </div>
  );
};

export default CartItem;

// string.charAt(0).toUpperCase() + string.slice(1)

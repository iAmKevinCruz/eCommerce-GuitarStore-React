import React, { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  const [amount, setAmount] = useState(1);

  const handleIncrease = () => {
    let val = amount + 1;
    setAmount(val);
    props.onChange(val);
    console.log(`Amount More ${val}`);
  };
  const handleDecrease = () => {
    if (amount > 1) {
      let val = amount - 1;
      setAmount(val);
      props.onChange(val);
      console.log(`Amount Less ${val}`);
    }
  };

  return (
    <div className="quantity-picker">
      <button
        className="shadow-sm btn-less"
        disabled={amount === 1}
        onClick={handleDecrease}
      >
        <p>-</p>
      </button>
      <label>{amount}</label>
      <button className="shadow-sm btn-more" onClick={handleIncrease}>
        <p>+</p>
      </button>
    </div>
  );
};

export default QuantityPicker;

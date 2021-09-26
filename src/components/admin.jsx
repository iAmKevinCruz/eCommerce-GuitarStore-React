import "./admin.css";
import { useState } from "react";
import ItemService from "../services/itemService";

const Admin = () => {
  const [product, setProduct] = useState({});

  const inputChange = (event) => {
    let prod = { ...product };
    let name = event.target.name;
    let value = event.target.value;

    prod[name] = value;

    setProduct(prod);
  };

  const btnSubmit = () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);
    copy.discount = parseFloat(copy.discount);
    copy.stock = +copy.stock;
    copy.minimum = copy.minimum * 1;

    let post = new ItemService();
    post.saveItem(copy);
    console.log(copy);
  };

  return (
    <div className="admin-page">
      <h1>Store Management</h1>

      <div className="container form px-3 py-3">
        <div className="mb-3 input-field row">
          <label htmlFor="title" className="form-label col-sm-2">
            Title
          </label>
          <input
            name="title"
            onChange={inputChange}
            id="title"
            type="text"
            className="form-control col-sm"
          />
        </div>

        <div className="mb-3 input-field row">
          <label htmlFor="category" className="form-label col-sm-2">
            Category
          </label>
          <input
            name="category"
            onChange={inputChange}
            id="category"
            type="text"
            className="form-control col-sm"
          />
        </div>

        <div className="mb-3 input-field row">
          <label htmlFor="price" className="form-label col-2">
            Price
          </label>
          <input
            name="price"
            onChange={inputChange}
            id="price"
            type="number"
            className="form-control col-sm"
          />
        </div>

        <div className="mb-3 input-field row">
          <label htmlFor="image" className="form-label col-sm-2">
            Image Name:
          </label>
          <input
            name="image"
            onChange={inputChange}
            id="image"
            type="text"
            className="form-control col-sm"
          />
        </div>

        <div className="mb-3 input-field row">
          <label htmlFor="discount" className="form-label col-sm-2">
            Discount
          </label>
          <input
            name="discount"
            onChange={inputChange}
            id="discount"
            type="number"
            className="form-control col-sm"
          />
        </div>

        <div className="mb-3 input-field row">
          <label htmlFor="minimum" className="form-label col-sm-2">
            Minimum
          </label>
          <input
            name="minimum"
            onChange={inputChange}
            id="minimum"
            type="number"
            className="form-control col-sm"
          />
        </div>

        <div className="mb-3 input-field row">
          <label htmlFor="stock" className="form-label col-sm-2">
            Stock
          </label>
          <input
            name="stock"
            onChange={inputChange}
            id="stock"
            type="number"
            className="form-control col-sm"
          />
        </div>
        <button onClick={btnSubmit} className="btn btn-success">
          Register Item
        </button>
      </div>
    </div>
  );
};

export default Admin;

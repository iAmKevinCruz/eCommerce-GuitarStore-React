import React, { useEffect, useState } from "react";
import "./catalog.css";
import Item from "./item";
import ItemService from "../services/itemService";

const Catalog = () => {
  // state variables
  let [products, setProducts] = useState([]);
  let [displayItems, setDisplayItems] = useState([]);
  let [categories, setCategories] = useState([]);

  // logic (fns)
  const retrieveCatalog = () => {
    let service = new ItemService();
    let cat = service.getCatalog();
    setProducts(cat);
    setDisplayItems(cat);
    console.log(cat);

    let categories = [];
    for (let i = 0; i < cat.length; i++) {
      let item = cat[i];
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    }
    console.log(categories);
    setCategories(categories);
  };

  const capLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleFilter = (category) => {
    console.log(`Filter ${category}`);
    let filtered = [];
    for (let i = 0; i < products.length; i++) {
      let item = products[i];
      if (item.category === category) {
        filtered.push(item);
      }
    }
    setDisplayItems(filtered);

    // setItemsOnDisplay(products.filter((prod) => prod.category === category));
  };

  const removeFilter = () => {
    setDisplayItems(products);
  };

  //   effects
  useEffect(() => {
    console.log(`Component Loaded`);
    retrieveCatalog();
  }, []); // [] added to ensure logic will be called only ONE TIME

  //   return
  return (
    <div className="catalog-page">
      <h3 className="display-3">Check our amazing products!</h3>
      <h6>Currently we have {products.length} items for you.</h6>
      <div className="category-buttons my-3">
        {categories.map((cat) => (
          <button
            onClick={() => {
              handleFilter(cat);
            }}
            key={cat}
            className="btn btn-sm btn-info mx-1 text-light"
          >
            {capLetter(cat)}
          </button>
        ))}
        <br />
        <button onClick={removeFilter} className="btn btn-sm btn-warning mt-1">
          Clear Filter
        </button>
      </div>
      <div className="item-container">
        {displayItems.map((prod) => (
          <Item key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;

var nums = [
  123, 42359, 12322, 234, 2334, 68456, 9567, 2347, 1, 56, 67, 123, 8, 0, -4,
];

/**
 * filter
 * - number greater than 333
 * - number lower that 100
 *
 *
 * map
 * - number * 2
 * - the number into "Hello World"
 *
 */

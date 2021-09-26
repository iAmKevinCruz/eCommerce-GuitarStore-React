import axios from "axios";

var data = [
  {
    _id: "001",
    title: `Lucero Acoustic-Electric Cutaway Classical Guitar Natural`,
    price: 299.95,
    category: "accoustic",
    image: "classical-01.jpg",
    discount: 10,
    minimum: 1,
    stock: 5,
  },
  {
    _id: "002",
    title: `Fender California Newporter Player Guitar  Ocean Teal Satin`,
    price: 359.95,
    category: "accoustic",
    image: "accoustic-03.webp",
    discount: 3,
    minimum: 1,
    stock: 7,
  },
  {
    _id: "003",
    title: `Fender FA-135CE Concert Acoustic-Electric Guitar  Black`,
    price: 159.95,
    category: "accoustic",
    image: "accoustic-02.webp",
    discount: 3,
    minimum: 1,
    stock: 2,
  },
  {
    _id: "004",
    title: `Schecter Guitar Research Reaper-6 Electric Guitar Aurora Burst`,
    price: 589.95,
    category: "stratocaster",
    image: "strat-01.webp",
    discount: 3,
    minimum: 1,
    stock: 4,
  },
  {
    _id: "005",
    title: `Epiphone Special-II GT Electric Guitar Worn Black`,
    price: 199.95,
    category: "les-paul",
    image: "strat-02.webp",
    discount: 3,
    minimum: 1,
    stock: 9,
  },
  {
    _id: "006",
    title: `Epiphone G-1275 Custom Double Neck LE Alpine White`,
    price: 1099.95,
    category: "double-kneck",
    image: "double-kneck.webp",
    discount: 10,
    minimum: 1,
    stock: 2,
  },
  {
    _id: "007",
    title: `Squier Limited-Edition Bullet Telecaster Electric Red Sparkle`,
    price: 149.95,
    category: "telecaster",
    image: "tele-01.webp",
    discount: 10,
    minimum: 1,
    stock: 4,
  },
  {
    _id: "008",
    title: `PRS SE 22 Semi-Hollow Quilt Top Electric Guitar Charcoal Burst`,
    price: 679.95,
    category: "semihollow",
    image: "strat-03.webp",
    discount: 3,
    minimum: 1,
    stock: 6,
  },
  {
    _id: "009",
    title: `Gretsch Guitars Streamliner Double-Cut Limited Edition`,
    price: 449.95,
    category: "semihollow",
    image: "hollow.webp",
    discount: 10,
    minimum: 1,
    stock: 7,
  },
];

class ItemService {
  async getCatalog() {
    // use axios to get the data from the server (back end)
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    return response.data;
    return data;
  }

  // create a saveItem function
  /*
   */
  async saveItem(product) {
    let post = await axios.post("http://127.0.0.1:5000/api/catalog", product);
    console.log("result of saving", post.data);
  }
}

export default ItemService;

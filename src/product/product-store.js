import { writable } from "svelte/store";

const products = writable([
  {
    productName: "Whole Wheat Bread",
    weight: "400g",
    price: "₹50.00",
    productImg: "./assets/image/1.png",
    isFavorite: false,
  },
  {
    productName: "Fresh Bread and Pastry Flour",
    weight: "200g",
    price: "₹99.00",
    productImg: "./assets/image/2.png",
    isFavorite: false,
  },
  {
    productName: "Premium Butter Cookies",
    weight: "600g",
    price: "₹249.00",
    productImg: "./assets/image/3.png",
    isFavorite: false,
  },
  {
    productName: "SnackAmor Combo Pack",
    weight: "1kg",
    price: "₹249.00",
    productImg: "./assets/image/5.png",
    isFavorite: false,
  },
  {
    productName: "Yumitos Chilli Sprinkled Potato Chips",
    weight: "100g",
    price: "₹150.00",
    productImg: "./assets/image/4.png",
    isFavorite: false,
  },
]);

const customStore = {
  subscribe: products.subscribe,
};

export default customStore;

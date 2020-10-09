import flowers from "../../data/flowerData.js";
import "./FlowerContainer.js";
import "../Home/NavBar.js"

const flowerList = document.querySelector("flower-list");
flowerList.flowers = flowers;
import "./FlowerItem.js";

customElements.define("flower-list", class FlowerContainer extends HTMLElement {
  constructor(){
    super();
  }
    set flowers(value) {
      this._flowers = value;
      this.render();
    }
    
    render() {
      this._flowers.forEach((flowerData) => {
        const flowerItem = document.createElement("flower-item");
        flowerItem.flower = flowerData;
        this.appendChild(flowerItem);
      });
    }
  }
);

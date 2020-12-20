customElements.define("flower-item", class FlowerItem extends HTMLElement {
  set flower(value){
    this._flower = value;
    this.render();
  }

  render() {
    const {img, title, desc} = this._flower;
    this.innerHTML = `
    <div>
        <img src="${img}" alt="${title}">
        <h1>${title}</h1>
        <p>${desc}</p>
        <button>Let's Take A Look</button>
    </div>
    `;
  }
})

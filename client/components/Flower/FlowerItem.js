customElements.define("flower-item", class FlowerItem extends HTMLElement {
  set flower(value){
    this._flower = value;
    this.render();
  }

  // render() {
  //   const {img, title, desc} = this._flower;
  //   this.innerHTML = `
  //   <div class=" flower-item">
  //       <img src="${img}" alt="${title}">
  //       <div>
  //         <h1>${title}</h1>
  //         <p>${desc}</p>
  //       </div>
  //       <button>Let's Take A Look</button>
  //   </div>
  //   `;
  // }

  render(){
    const {name, images, description} = this._flower;
    this.innerHTML = `
    <div class=" flower-item">
        <img src="${images[0]}" alt="">
        <div>
          <h1>${name}</h1>
          <p>${description}</p>
        </div>
        <button>Let's Take A Look</button>
    </div>`
  }
})

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
    const {name} = this._flower;
    this.innerHTML = `
    <div class=" flower-item">
        <img src="" alt="">
        <div>
          <h1>${name}</h1>
          <p></p>
        </div>
        <button>Let's Take A Look</button>
    </div>`
  }
})

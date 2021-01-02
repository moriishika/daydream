customElements.define('occasion-item', class OcassionItem extends HTMLElement {
  constructor() {
    super();
    console.log('constructor occasion item')
  }

  connectedCallback(){
    console.log('connect occ item')
  }

  set occasion(value) {
    console.log('jalan occ item')
    this._occasion = value;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      occasion-item{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }
    </style>`
    const { img, title, desc, link } = this._occasion;
    this.innerHTML += `
    <div class="occasion flex">
        <div class="occasion-img">
            <img src="${img}" class="imagesss" alt="">
        </div>
        <div class="occasion-texts flex column center-align center-justify">
          <h1>${title}</h1>
          <p>${desc}</p>
          <a href="${link}">View Collections</a>
        </div>
        </div>
`
}
})

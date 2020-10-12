let template = document.createElement('template');
template.innerHTML = `
<style>
:root{
    background-color:black;
}
:host{
  background-color:black;
}
    nav {
       display : flex;
       justify-content : space-evenly;
       align-items : center;
       height : 15vh;
       position: sticky;
    }
    nav li{
        list-style : none;
    }

    nav li a {
        text-decoration : none;
        font-size:1.8rem;
        font-weight : 500;
        opacity:0.6;
    }

    nav li a img{
        height : 15vh;
    }
</style>
<nav>
    <li><a href="">Occasions</a></li>
    <li><a href="/views/flower/flowers.html">Flowers</a></li>
    <li><a href="/views/index.html"><img src="../../assets/images/logo.png"></img></a></li>
    <li><a href="">Questions</a></li>
    <li><a href="">Contact</a></li>
</nav>
`;

customElements.define(
  "nav-bar",
  class NavBar extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
      this.render();
    }

    get disabled() {
      return this.hasAttribute("disabled");
    }

    set disabled(value) {
      if (value) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
      this.render();
    }

    render(){
      
    }
  }
);

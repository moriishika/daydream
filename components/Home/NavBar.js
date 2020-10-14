let template = document.createElement('template');
template.innerHTML = `
<style>
:root{
    background-color:black;
    position:sticky
}
:host{
  background-color:black;
  position:sticky;
}


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

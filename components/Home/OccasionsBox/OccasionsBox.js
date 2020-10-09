let template = document.createElement('template');
template.innerHTML =`
    <style>
        :host{
            width:200px;
            height:200px;
            border: 2px solid black;
        }
    </style>
`;

customElements.define('occasions-box', class OccasionsBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
    
    }
})
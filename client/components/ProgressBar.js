customElements.define('progress-bar', class ProgressBar extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <div class="progress-bar" id="myBar"></div>
        `
    }

    connectedCallback(){
        document.body.classList.add('trigger')
    }
})
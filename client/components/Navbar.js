customElements.define('nav-bar', class Navbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <nav id='navbar'>
            <li><a href="">Occasions</a></li>
            <li><a href="${this.relativePath()}/client/views/flower/flowers.html">Flowers</a></li>
            <li><a href="${this.relativePath()}/client/index.html"><img src="${this.relativePath()}/client/assets/images/logo.png"></img></a></li>
            <li><a href="">Questions</a></li>
            <li><a href="">Contact</a></li>
        </nav>
        `
    }

    onScrolling() {
        ScrollTrigger.addEventListener("scrollStart", () => {
            navbar.style.top = "-150px";
            navbar.style.boxShadow = "0px 3px 20px #af71df38";
        });

        ScrollTrigger.addEventListener("scrollEnd", () => {
            if (scrollY == 0) {
                navbar.style.top = "0px";
                navbar.style.boxShadow = "";
            } else {
                navbar.style.top = "0px";
                navbar.style.boxShadow = "0px 3px 20px #af71df38";
            }
        });
    }

    relativePath() {
            if (window.location.pathname.includes('/daydream/')) {
                return `${window.location.host}/daydream`
            } else {
                return '';
            }
    }

    connectedCallback() {
        if (this.getAttribute('autoHide')) {
            this.onScrolling();
        } else {
            return;
        }
    }

    // attributeChangedCallback(name, oldValue, newValue) {
    //     console.log(newValue)
    //     if (newVaalue) {
    //         console.log(newValue)
    //        this.onScrolling();
    //     } else {
    //         return;
    //     }
    // }

    // static get observedAttributes() {
    //     return ['autoHide']
    // }
})
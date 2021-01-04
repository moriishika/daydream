customElements.define('nav-bar', class Navbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <nav id='navbar' class="navbar">
            <li><a href="">Occasions</a></li>
            <li><a href="../../views/flower/flowers.html">Flowers</a></li>
            <li><a href="../../views/home/index.html"><img src="../../assets/images/logo.png"></img></a></li>
            <li><a href="">Questions</a></li>
            <li><a href="">Contact</a></li>
        </nav>
        `
    }

    activeAutoHide() {
        let navbar = document.querySelector('#navbar');
        ScrollTrigger.addEventListener("scrollStart", () => {
            navbar.style.top = "-25vh";
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

    activeSearchMenu() {
        let searchMenu = document.createElement('search-menu');
        this.innerHTML = `
        <style>
            nav{
                height:18vh;
                position: sticky;
                top:0;
                background-color: white;
                z-index: 9999;
                transition: 1s;
                justify-content:space-between;
            }
            .navbar{
                height:80%;
            }
        </style>
        <nav id='navbar' class="flex column ">
            <div class="flex navbar">
                    <li><a href="">Occasions</a></li>
                    <li><a href="../../views/flower/flowers.html">Flowers</a></li>
                    <li><a href="../../views/home/index.html"><img src="../../assets/images/logo.png"></img></a></li>
                    <li><a href="">Questions</a></li>
                    <li><a href="">Contact</a></li>
                    </div>
            </nav>
        `
        this.querySelector('#navbar').appendChild(searchMenu);
        this.autoHideCheck();
    }

    autoHideCheck() {
        if (this.getAttribute('autoHide') === 'true') {
            this.activeAutoHide();
        } else {
            return;
        }
    }

    searchMenuCheck() {
        console.log('masuk')
        if (this.getAttribute('searchMenu') === 'true') {
            this.activeSearchMenu();
        } else {
            return;
        }
    }

    connectedCallback() {
        this.autoHideCheck();
        this.searchMenuCheck();
    }
})
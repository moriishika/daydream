customElements.define('search-menu', class SearchMenu extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <style>
            .search-menu{
                margin : 0 1.5vw 0 1.5vw;
                justify-content:space-between;
                height:100%;
            }
            select,input{
                height:68%;
            }
            search-menu{
                display:flex;
                flex-direction:column;
                justify-content:center;
                height:20%;
                background-color:#efe7f8;
            }
            
            input[type="search"] {
                -webkit-appearance: none;
                appearance: none;
                border: 1px solid #575756;
                border-radius:15px;
                transition:all 250ms ease-in-out;
                background-color :transparent;
                padding: 5px 7px;
                backface-visibility:hidden;
                transform-style: preserve-3d;
                background-image: url("../../assets/svg/loupe.svg");
                background-repeat: no-repeat;
                background-size: 10px 10px;
                background-position: 95% center;
            }

            input[type="search"]:placeholder{
            color: #575756;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            }
            
            input[type="search"]:focus,
            input[type="search"]:hover{
                border-width:0 0 1px 0;
                border-radius:0px;
                padding : 5px 0px;
                border: 1px solid transparent;
                border-bottom: 1px solid #575756;
                outline:none;
                
            }
            
        </style>
        <div class='search-menu flex center-align'>
            <select>
                <option value="">Sort by :</option>
                <option value="">Popular Rating</option>
                <option value="">Average Rating</option>
                <option value="">Low to High Price</option>
                <option value="">High to Low Price</option>
            </select>
            <input type="search" placeholder="search">
        </div>
        `
    }
})
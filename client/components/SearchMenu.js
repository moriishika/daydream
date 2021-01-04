customElements.define('search-menu', class SearchMenu extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <style>
            .search-menu{
                margin : 0 1.5vw 0 1.5vw;
                justify-content:space-between;
            }
            search-menu{
                display:flex;
                flex-direction:column;
                justify-content:center;
                height:20%;
                background-color:#efe7f8;
            }
        </style>
        <div class='search-menu flex '>
            <select>
                <option value="">Sort by :</option>
                <option value="">Popular Rating</option>
                <option value="">Average Rating</option>
                <option value="">Low to High Price</option>
                <option value="">High to Low Price</option>
            </select>
            <input type="text" placeholder="search">
        </div>
        `
    }
})
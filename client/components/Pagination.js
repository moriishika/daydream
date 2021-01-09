customElements.define('pagination-tag', class PaginationTag extends HTMLElement{
    constructor(){
        super();
        console.log('terbuat')
    }

    connectedCallback(){
        this.innerHTML=`
        <div class="flex">
        <a href="" id="prev"><</a>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="" id="next">></a>
        </div>
        `
    }
})
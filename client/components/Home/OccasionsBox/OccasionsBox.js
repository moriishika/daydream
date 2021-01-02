customElements.define('occasions-box', class OccasionsBox extends HTMLElement{
    constructor(){
        super();
        console.log('jalan constructor')
    }

    set occasions(value){
        console.log('method jalan')
        this._occasions = value;
        this.render() 
    }
    connectedCallback(){
        console.log("connect")
    }
    
    render(){
        this._occasions.forEach(occasion => {
            const occasionItem = document.createElement('occasion-item');
            occasionItem.occasion = occasion;
            this.appendChild(occasionItem)
        });
    }
})
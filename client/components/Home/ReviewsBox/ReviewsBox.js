customElements.define('reviews-box', class ReviewBox extends HTMLElement {
    constructor(){
        super();
        console.log("jalan constructor")
    }

    connectedCallback(){
        console.log('masuk connect')
    }

    set reviews(value){
        console.log('jalan method')
        this._reviews = value;
        this.render();
    }

    render(){
        console.log('masuk render')
        this._reviews.forEach(review => {
            let reviewItem = document.createElement('review-item');
            reviewItem.review = review;
            this.appendChild(reviewItem);
        })
    }
})
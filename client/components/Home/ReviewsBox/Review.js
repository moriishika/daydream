customElements.define('review-item', class ReviewItem extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({mode:'open'}).innerHTML = `
        // <style>
        //   .flex{
        //     display: flex;
        //   }
        
        //   .column{
        //     flex-direction : column;   
        //   }
        
        //   .center-justify{
        //     justify-content: center;
        //   }
        
        //   .center-align {
        //     align-items: center;
        //   }

        //   h1, h2, p{
        //     margin: 0;
        // }
        
        //   .review {
        //     background-color: #fef3ff;
        //     width: 100%;
        //     height: 100%;
        //     border-radius: 12px;
        //     filter: drop-shadow(0 3px 6px #faedfc);
        //     box-sizing: border-box;
        //     padding: 0.8%;
        //     align-items :center;
        //   }
          
        //   .review-texts {
        //     box-sizing: border-box;
        //     margin-left: 2%;
        //     width: 70%;
        //   }
          
        //   .review-texts p {
        //     font-size: 1rem;
        //     letter-spacing: -1px;
        //     word-wrap: break-word;
        //     display: inline-block;
        //     width: 90%;
        //   }
          
        //   .review-img {
        //     width: 30%;
        //     height: 100%;
        //   }
          
        //   .review-img a {
        //     text-decoration: none;
        //     width: 100%;
        //     height: 100%;
        //   }
          
        //   .review-img img {
        //     height: 80%;
        //     border-radius: 100%;
        //     filter: drop-shadow(0px 2px 6px #af71df7c);
        //   }
        //   </style>
        // `
    }

    set review(value){
      this._review = value;
      this.render(); 
    }

    connectedCallback(){

    }

    render(){
      const {title, desc, img, link} = this._review;
      this.innerHTML += `
      <div class="review flex center-align"> 
        <div class="review-texts">
          <h2>${title}</h2>
          <p>${desc}</p>
        </div>
      <div class="review-img">
        <a href="${link}" class="flex center-justify center-align"><img src="${img}" alt=""></a>
      </div>
    </div>
      `
    }
  })
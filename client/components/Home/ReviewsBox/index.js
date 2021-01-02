import './ReviewsBox.js';
import './Review.js';

const dummyReview = [{
    title : 'Albert Einstein',
    desc :`"The Most Amazing flower I have ever seen. 
    It just felt like I will comeback alive again"`,
    link :'#',
    img:'./assets/images/11.jpg'
},{
    title : 'Albert Einstein',
    desc :`"The Most Amazing flower I have ever seen. 
    It just felt like I will comeback alive again"`,
    link :'#',
    img:'./assets/images/11.jpg'
},{
    title : 'Albert Einstein',
    desc :`"The Most Amazing flower I have ever seen. 
    It just felt like I will comeback alive again"`,
    link :'#',
    img:'./assets/images/11.jpg'
}];

const reviewsBox = document.querySelector('reviews-box');
reviewsBox.reviews = dummyReview;
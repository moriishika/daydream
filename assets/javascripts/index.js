gsap.registerPlugin(ScrollTrigger);
const navbar = document.getElementById('navbar');

ScrollTrigger.addEventListener("scrollStart", () => {
    navbar.style.top = '-150px'
    navbar.style.boxShadow = '0px 3px 20px #af71df38';
})

ScrollTrigger.addEventListener("scrollEnd", () => {
    if(scrollY == 0){
        navbar.style.top = '0px'
        navbar.style.boxShadow = ''
    }else{
        navbar.style.top = '0px'
        navbar.style.boxShadow = '0px 3px 20px #af71df38';
    }
});
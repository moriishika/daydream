// Navbar Trigger onScroll
const navbar = document.getElementById("navbar");

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

// QNA details logic for open only one detail
const details = document.querySelectorAll(".qna-details details");

const hide = (e) => {
  if (e.open) {
    details.forEach((deet) => {
      if (deet != e && deet.open) deet.open = false;
    });
  }
};

details.forEach((detail) => {
  detail.addEventListener("toggle", () => hide(detail));
});

//Animations
const fadeIn = {
  y: -100,
  opacity: 0,
};

const fadeInLR = {
  x: 50,
  opacity: 0
}
// Animations in Intro Section

// Animation for h1 and h2 in intro-title
const introTL = gsap.timeline();
introTL.fromTo(
  [".intro-title h1", ".intro-title h2"],
  { x: -100, opacity: 0 },
  { stagger: 0.5, x: 0, opacity: 1, duration:0.8}
);
gsap.to(".tirais div", {
  stagger: 0.4,
  height: 0,
  duration: 1,
  ease: "power4",
});
//Animation for Daydream Feature
gsap.fromTo([".daydream-reasons h1", ".reason"], fadeIn, {
  scrollTrigger: {
    trigger: ".daydream-reasons",
    start: "top center",
    end: "bottom center",
    markers: false,
  },
  y: 0,
  opacity: 1,
  stagger: 0.3,
});

gsap.fromTo(
  ["occasions-box", "occasions-box occasion-item .occasion-texts h1", " .occasion-texts p", " .occasion-texts a"],
  fadeIn,
  {
    scrollTrigger: {
      trigger: "occasions-box",
      start: "top center",
      end: "bottom center",
      markers: false,
    },
    y: 0,
    opacity: 1,
    stagger: 0.5,
  }
);

gsap.fromTo([".reviews-container h1", "review-item", "review-item h2", "review-item p","review-item img"], fadeIn, {
  scrollTrigger: {
    trigger: ".reviews-container",
    start: "top center",
    end: "110% center",
    markers: false,
  },
  y: 0,
  opacity: 1,
  duration: 0.6,
  stagger: 0.1,
});

//Animation for Florist Section
const floristTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".florist",
    start: "20% center",
    end: "bottom center",
    markers: false,
  }
});

gsap.set('.florist-img img ', {
  css: {
    filter: 'drop-shadow(0 0 0 #e2d5f8) drop-shadow(0 0 0 #e2d5f8)'
  }
})

floristTL.to(CSSRulePlugin.getRule(".florist-text h2::before"), {
  cssRule: {
    width: '0%'
  },
  duration: 1,
  ease: 'power2.out'
}
).fromTo(['.florist-img img', '.shadow-circle'], fadeInLR, {
  x: 0,
  opacity: 1,
  duration: 0.6
}).fromTo('.florist-line span', 0.7, { css: { skewY: 7 } }, {
  css: {
    top: 0,
    skewY: 0,
    ease: 'power4.out'
  },
  stagger: {
    amount: 0.3
  }
})
  .to('.florist-img img', {
    css: {
      filter: 'drop-shadow(1.5vw -1.8vw 0 #e2d5f8) drop-shadow(0 0 10px #e2d5f8)'
    }
  })

  // Animation for customize section
const customTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".customize",
    start: "15% center",
    end: "bottom center",
    markers: false,
  }
});

gsap.set('.customize-img img', {
  css: {
    filter: 'drop-shadow(0vw 0vw 0 #f8e4ed) drop-shadow(0 0 0px #fadae9)'
  }
})


customTL.fromTo('.customize > h1', fadeIn, {
  y: 0,
  opacity: 1
}).to([CSSRulePlugin.getRule(".customize-text h1::before"),CSSRulePlugin.getRule(".customize-text h2::before") ], {
  cssRule: {
    width: '0%'
  },
  ease: 'power2.out',
  stagger:0.4
}
).to('.customize-img img', {
  css: {
    filter: 'drop-shadow(-1.5vw -1.8vw 0 #f8e4ed) drop-shadow(0 0 10px #fadae9)'
  },
  duration: 1,
  ease: 'power2.out'
}).to('.customize-text span', {
  css:{
    x:0,
    opacity:1
  },
  ease:'power4.out'
}).fromTo('.customize-text p', {opacity:0, y:25}, {opacity:1, y:0, ease:'power.out2'})


// Animation for Shop & QNA Section
const sqnaTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".shopsqna",
    start: "15% center",
    end: "bottom center",
    markers: false,
  }, 
  stagger:0.5
})

sqnaTL.fromTo(['.shops h1', '.shops img', '.qna h1', '.qna details'], fadeIn, {
  y: 0,
  opacity: 1,
  stagger : 0.2
}).fromTo(['.contact', '.copyright'], {
  width: '0%'
},{
  width:'100%',
  stagger:0.4
}).fromTo(['.contact h1', '.contact svg', '.copyright h3'],{
  x: -30,
  opacity:0
}, {
  x:0,
  opacity:1,
  stagger: 0.3
})


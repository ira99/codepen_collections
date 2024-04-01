import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);  

gsap.utils.toArray("[data-img-parallax='']").forEach(function(container) {
  let image = container.querySelector("[data-img='']");
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      pin: false,
    },
  }); 
  tl.from(image, {
    transformOrigin: "50% 50%",
    yPercent: -25,
    ease: "none",
  }).to(image, {
    transformOrigin: "50% 50%",
    yPercent: 25,
    ease: "none",
  }); 
});
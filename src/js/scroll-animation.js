import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {

  let itemAnimate = document.querySelectorAll('[data-scroll-animate]');

  itemAnimate.forEach(item => {
    let anim = JSON.parse(item.getAttribute('data-scroll-animate'));

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        toggleActions: 'restart none none reset',
      }
    })

    tl.from(item, anim.duration, {
      x: anim.x,
      y: anim.y,
      opacity: anim.opacity,
      ease: "none",
    })
  })

});
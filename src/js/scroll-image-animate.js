import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.onload = () => {

  let itemAnimate = document.querySelectorAll('[data-scroll-img=""]');

  itemAnimate.forEach(current => {
    let img = current.querySelector('img');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: current,
        toggleActions: 'restart none none reset',
      }
    })

    tl.set(current, {autoAlpha: 1});

    tl.from(current, 1.5, {
       xPercent: -100,
       ease: Power2.out,
    })

    tl.from(img, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5, 
      ease: Power2.out,
    })

  })
}
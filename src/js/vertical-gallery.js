import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

if (document.getElementById("values")) {
    
    gsap.set("[data-parallax-img='']", { zIndex: (i, target, targets) => targets.length - i });

    let images = gsap.utils.toArray("[data-parallax-img='']:not(:last-child)");

    images.forEach((image, i) => {
       let tl = gsap.timeline({
         scrollTrigger: {
           trigger: "[data-parallax-container='']",
           start: () => "top -" + (window.innerHeight * (i)),
           end: () => "+=" + window.innerHeight,
           scrub: true,
           toggleActions: "play none reverse none",
           invalidateOnRefresh: true,     
         }
       });
       tl
       .fromTo(image, { height: () => { return "100%" } }, { height: () => { return "0%" }, ease: "cubic-bezier(.19,1,.22,1)" });
    });

    ScrollTrigger.create({
      trigger: "[data-parallax-container='']",
      pin: '[data-img-wrap=""]',  
      start: () => "top top",
      end: () => "+=" + ((images.length) * window.innerHeight),
      invalidateOnRefresh: true, 
    });
}
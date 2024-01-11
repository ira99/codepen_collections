import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.onload = () => {

  gsap.set('[data-scroll-wrapper=""]', {
    width: '100%',
    height: gsap.getProperty('#app', 'height'),
    onComplete: () => {
      gsap.set('[data-scroll-app=""], [data-image-group=""]', {
        opacity: 1, 
        position: 'fixed', 
        width: '100%', 
        height: '100%', 
        top: 0, 
        left: 0, 
        perspective: 300,
      });
      
      gsap.set('[data-image-group=""] img', {
        position: 'absolute',
        attr: { id:(i,t,a) => {
            initImg(i,t);
            return 'img'+i;
          }
        }

      });

      gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
          trigger: '[data-scroll-wrapper=""]',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        }
      })

      .fromTo('[data-text-start=""]', {scale: 0.4, opacity: 1,  transformOrigin: '50%'}, {scale: 1, opacity: 0, ease: 'power1.in'})
      .fromTo('.imgBox',{z: -5000}, {z: 350, stagger: -0.3, ease: 'none'}, 0.3 )
      .fromTo('.imgBox img',{scale: 3}, {scale: 1.15, pointerEvents:'auto', stagger: -0.3, ease: 'none'}, 0.3 )
      .to('.imgBox',{duration: 0, pointerEvents: 'auto'} )
      .from('.imgBox img', {duration:0.3, opacity:0, stagger:-0.3, ease:'power1.inOut'}, 0.3)
      .to('.imgBox img', {duration:0.1, opacity:0, stagger:-0.3, ease:'expo.inOut'}, 1.2)      
      .to('.imgBox', {duration:0, pointerEvents:'none', stagger:-0.3}, 1.27)
      .add('end')
      .fromTo('[data-text-end=""]', {scale:0.1, opacity: 0, transformOrigin:'50%'},{scale:1, opacity: 1, ease:'power3'}, 'end-=0.2')
      
      // intro animation
      // gsap.from(window, {duration:1.4, scrollTo:gsap.getProperty('#scrollDist','height')/3, ease:'power2.in'});
      gsap.from('.imgBox', {duration:0.2, opacity:0, stagger:0.06, ease:'power1.inOut'})
    }
  })

  function initImg(i,t) {
    const box = document.createElement('div');

    box.appendChild(t);
    document.getElementById('imgGroup').appendChild(box);

    gsap.set(box, {
      pointerEvents: 'none',
      position: 'absolute',
      attr: { id: 'box' + i, class: 'imgBox' },
      width: t.width, 
      height: t.height, 
      overflow: 'hidden',
      top: '50%',
      left: '50%',
      x: t.dataset.x, 
      y: t.dataset.y, 
      xPercent: -50,
      yPercent: -50,
      perspective: 500,
    })

    t.onmouseover = () => gsap.to('[data-cursor=""]', {duration: 0.2, attr:{r: 30, 'stroke-width': 4}})
  
    t.onmousedown = () => {
      gsap.to(t,{z: -25, ease: 'power2'});
      gsap.to('#cursorCircle', { attr: {r:40}, ease: 'power3'})
    }

    t.onmouseup = () => {
      gsap.to(t, { z: 0, ease: 'power1.inOut'})
    }

    t.onmouseout = () => {
      gsap.to('#cursorCircle', {
        duration: 0.2,
        attr: {
          r: 11,
          'stroke-width': 3,
        }
      })
    }
  }

  if (ScrollTrigger.isTouch==1) {
    gsap.set('[data-cursor=""]', {opacity:0}) 
    gsap.set('.imgBox', {x:0, y:0})
  } else {
    let cursorX = gsap.quickTo('#cursor', 'x', {duration:0.3, ease:'power2'})
    let cursorY = gsap.quickTo('#cursor', 'y', {duration:0.3, ease:'power2'})

    window.onmousemove =(e)=> {      
      gsap.to('.imgBox', { // move + rotate imgBoxes relative to mouse position
        xPercent:-e.clientX/innerWidth*50,
        yPercent:-25-e.clientY/innerHeight*25,
        rotateX:8-e.clientY/innerHeight*16,
        rotateY:-8+e.clientX/innerWidth*16
      })
      
      gsap.to('.imgBox img', { // move images inside each imgBox, creates additional parallax effect
        xPercent:-e.clientX/innerWidth*5,
        yPercent:-5-e.clientY/innerHeight*5
      })

      // mouse follower
      cursorX(e.clientX)
      cursorY(e.clientY)
     
  }
}
}
!function(){"use strict";document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".js-product"),e=document.querySelector(".js-basket-total"),o=document.querySelector(".js-basket-count"),d=document.querySelectorAll(".js-add-basket");let l=25.4,n=t.length*l-4*l;window.matchMedia("(max-width: 768px)").matches&&(l=52,n=t.length*l-2*l);for(let t of d)t.onclick=(t=>{e.classList.add("active");let d=Number(o.getAttribute("data-product-count"))||0;o.setAttribute("data-product-count",d+1),o.textContent=d+1;let l=t.target.closest(".js-product"),n=t.target.closest(".js-product");l.style.zIndex="100",n&&(n.style.zIndex="100");let c=l.querySelector(".js-product__img").cloneNode();c.classList.add("flying-img"),l.appendChild(c);const s=c.getBoundingClientRect(),i=e.getBoundingClientRect();let u={left:i.left-(i.width/2+s.left+s.width/2-40),top:i.bottom-s.bottom-80};c.style.cssText=`\n                                  --left : ${u.left.toFixed(2)}px;\n                                  --top : ${u.top.toFixed(2)}px;\n                                  `,setTimeout(()=>{l.style.zIndex="",n&&(n.style.zIndex=""),l.removeChild(c),e.classList.remove("active")},2e3)})})}();
//# sourceMappingURL=main.js.map

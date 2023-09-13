document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".js-product"),
        shopping_cart = document.querySelector(".js-basket-total"),
	      shopping_cart_count = document.querySelector(".js-basket-count"),
        cart_btns = document.querySelectorAll(".js-add-basket");

  let left = 0,
      card_size = 25.4,
      total_card_size = cards.length * card_size - card_size * 4;

  if (window.matchMedia("(max-width: 768px)").matches) {
    card_size = 52;
    total_card_size = cards.length * card_size - card_size * 2;
  }

  function checkArrowVisibility(pos) {
    if (pos == 0) {
      left_arrow.style.opacity = "0";
    } else {
      left_arrow.style.opacity = "1";
    }
    if (pos >= total_card_size) {
      right_arrow.style.opacity = "0";
    } else {
      right_arrow.style.opacity = "1";
    }
  }

  // Fly To Shopping Cart Effect
  for (let cart_btn of cart_btns) {
    cart_btn.onclick = (e) => {
      shopping_cart.classList.add("active");

      let product_count = Number(shopping_cart_count.getAttribute('data-product-count')) || 0;
      shopping_cart_count.setAttribute('data-product-count', product_count + 1);
			shopping_cart_count.textContent = product_count + 1;

      // finding first grand parent of target button
      let target_parent = e.target.closest(".js-product"),
          target_parentSlide = e.target.closest(".js-product");

      target_parent.style.zIndex = "100";
      if (target_parentSlide) {
        target_parentSlide.style.zIndex = "100";
      }

      // Creating separate Image
      let img = target_parent.querySelector(".js-product__img"),
          flying_img = img.cloneNode();

      flying_img.classList.add("flying-img");

      target_parent.appendChild(flying_img);

      // Finding position of flying image

      const flying_img_pos = flying_img.getBoundingClientRect(),
            shopping_cart_pos = shopping_cart.getBoundingClientRect();

      let data = {
        left:
          shopping_cart_pos.left -
          (shopping_cart_pos.width / 2 +
            flying_img_pos.left +
            flying_img_pos.width / 2 -
            40),
        top: shopping_cart_pos.bottom - flying_img_pos.bottom - 80,
      };

      flying_img.style.cssText = `
                                  --left : ${data.left.toFixed(2)}px;
                                  --top : ${data.top.toFixed(2)}px;
                                  `;

      setTimeout(() => {
        target_parent.style.zIndex = "";
        if (target_parentSlide) {
          target_parentSlide.style.zIndex = "";
        }
        target_parent.removeChild(flying_img);
        shopping_cart.classList.remove("active");
      }, 2000);
    };
  }
});

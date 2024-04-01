
  const sliderThumb = document.querySelector('[data-slider-hero-thumb]');
	const swiperThumb = new Swiper(sliderThumb, {
		loop: true,
		direction: 'vertical',
    spaceBetween: 5,
    slidesPerView: 1,
    speed: 1300,
		on: {
			slideChangeTransitionEnd: function () {
				let activeCount = this.activeIndex + 1;
				document.querySelector('[data-slide-count]').innerText = '0' + activeCount;
			},
		},
	});

	const sliderHero = document.querySelector('[data-slider-hero]');
	const swiperHero = new Swiper(sliderHero, {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 1300,
		autoHeight: true,
		autoplay: {
			delay: 3500,
		},
		effect: 'creative',
		creativeEffect: {
			prev: {
				translate: [0, '-100%', 0]
			},
			next:{
				translate: [0, '0%', -1]
			}
		},
		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
		thumbs: {                       
			swiper: swiperThumb,   
		},
	});
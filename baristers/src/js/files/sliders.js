/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const servicesSliderTabs = document.querySelectorAll('.services-slider__tabs-btn');
		const servicesSlider = new Swiper('.services-slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, EffectFade, Autoplay],
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// 	pauseOnMouseEnter: true
			// },
			effect: "fade",
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 500,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.services-slider__prev',
				nextEl: '.services-slider__next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});

		servicesSliderTabs.forEach(item => {
			item.addEventListener('click', () => {
				servicesSlider.slideTo(item.dataset.slide);
			});
		});

		//! Product slider

		const productSlider = new Swiper('.products-slider', {
			modules: [Navigation, Pagination, Autoplay],
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// 	pauseOnMouseEnter: true
			// },
			slidesPerView: 'auto',
			spaceBetween: 100,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
			breakpoints: {
				320: {
					spaceBetween: 50,
				},
				992: {
					spaceBetween: 100,
				},
			},
		});

		//! News slider

		const newsSlider = new Swiper('.news-slider', {
			modules: [Navigation, Pagination, Autoplay],
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// 	pauseOnMouseEnter: true
			// },
			slidesPerView: 2.4,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					autoHeight: true
				},
				480: {
					slidesPerView: 1.1,
					autoHeight: false
				},
				575: {
					slidesPerView: 1.5,
				},
				575: {
					slidesPerView: 1.8,
				},
				1024: {
					slidesPerView: 2.1,
				},
				1280: {
					slidesPerView: 2.4,
				},
				1600: {
					slidesPerView: 3.2,
				},
				1921: {
					slidesPerView: 3.8,
				},

			},
		});

		//! News article slider

		const newsArticleSlider = new Swiper('.news-article__slider', {
			modules: [Navigation, Pagination, Autoplay],
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// 	pauseOnMouseEnter: true
			// },
			slidesPerView: 1,
			navigation: {
				prevEl: '.slider-btn-prev',
				nextEl: '.slider-btn-next',
			},
			pagination: {
				el: ".swiper-pagination",
				type: "fraction",
			},
		});

		// if (!!window.IntersectionObserver) {
		// 	let observer = new IntersectionObserver(
		// 		(entries, observer) => {
		// 			entries.forEach((entry) => {
		// 				if (entry.isIntersecting) {
		// 					console.log(entry);
		// 					servicesSlider.autoplay.start()
		// 					newsSlider.autoplay.start()
		// 					productSlider.autoplay.start()
		// 					// You can remove the observer if you do not need it
		// 					observer.unobserve(entry.target);
		// 				}
		// 			});
		// 		},
		// 		{ rootMargin: "0px 0px -200px 0px" }
		// 	);

		// 	// Add the observer to you swiper
		// 	observer.observe(document.querySelector('.services-slider'));
		// 	observer.observe(document.querySelector('.products-slider'));
		// 	observer.observe(document.querySelector('.news-slider'));
		// } else {
		// 	// servicesSlider.autoplay.start();
		// }

		// breakpoint where swiper will be destroyed
		// and switches to a dual-column layout
		const breakpoint = window.matchMedia('(min-width:992px)');

		// keep track of swiper instances to destroy later
		let achievementSlider;

		//////////////////////////////////////////////////////////////////

		const breakpointChecker = function () {

			// if larger viewport and multi-row layout needed
			if (breakpoint.matches === true) {

				// clean up old instances and inline styles when available
				if (achievementSlider !== undefined) achievementSlider.destroy(true, true);

				// or/and do nothing
				return;

				// else if a small viewport and single column layout needed
			} else if (breakpoint.matches === false) {

				// fire small viewport version of swiper
				return enableSwiper();

			}

		};

		const achievementSliderWrapper = document.querySelector('.achievement-slider-wrapper');
		const achievementSliders = document.querySelectorAll('.achievement-slider');
		const clientsSliderWrapper = document.querySelectorAll('.clients-slider-wrapper');
		const clientsSliders = document.querySelectorAll('.clients-slider');
		const partnersSliderWrapper = document.querySelectorAll('.partners-slider-wrapper');
		const partnersSliders = document.querySelectorAll('.partners-slider');

		for (let i = 0; i < clientsSliders.length; i++) {
			clientsSliders[i].classList.add('clients-container-' + i);
			if (clientsSliderWrapper) {
				const clientsSlider = new Swiper('.clients-container-' + i, {
					modules: [Navigation, Pagination],
					slidesPerView: 5,
					spaceBetween: 60,
					// grabCursor: true,
					navigation: {
						nextEl: '.clients-slider__next',
						prevEl: '.clients-slider__prev',
					},
					pagination: {
						el: ".swiper-pagination",
						type: "progressbar",
					},
					breakpoints: {
						319: {
							slidesPerView: 1,
						},
						480: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						575: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 60,
						},
						1921: {
							slidesPerView: 7,
							spaceBetween: 60,
						},
					},
				});
			}
		}
		for (let i = 0; i < partnersSliders.length; i++) {
			partnersSliders[i].classList.add('partners-container-' + i);
			if (partnersSliderWrapper) {
				const partnerSlider = new Swiper('.partners-container-' + i, {
					modules: [Navigation, Pagination],
					slidesPerView: 5,
					spaceBetween: 60,
					// grabCursor: true,
					navigation: {
						nextEl: '.clients-slider__next',
						prevEl: '.clients-slider__prev',
					},
					pagination: {
						el: ".swiper-pagination",
						type: "progressbar",
					},
					breakpoints: {
						319: {
							slidesPerView: 1,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 60,
						},
						1921: {
							slidesPerView: 7,
							spaceBetween: 60,
						},
					},
				});
			}
		}

		const enableSwiper = function () {

			for (let i = 0; i < achievementSliders.length; i++) {

				achievementSliders[i].classList.add('swiper-container-' + i);

				if (achievementSliderWrapper) {
					const achievementSlider = new Swiper('.swiper-container-' + i, {
						modules: [Navigation],
						slidesPerView: 2,
						spaceBetween: 40,
						// grabCursor: true,
						navigation: {
							nextEl: '.achievement-slider__next',
							prevEl: '.achievement-slider__prev',
						},
						breakpoints: {
							319: {
								slidesPerView: 1,
							},
							575: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
						},
					});
				}
			}
		};

		// keep an eye on viewport size changes
		breakpoint.addListener(breakpointChecker);

		// kickstart
		breakpointChecker();
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
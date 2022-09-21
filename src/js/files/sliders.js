/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, EffectFade } from 'swiper';
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
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const mainSLiders = document.querySelectorAll('.main-slider');

		for (let i = 0; i < mainSLiders.length; i++) {

			mainSLiders[i].classList.add('swiper-container-' + i);

			const mainSlider = new Swiper('.swiper-container-' + i, {
				modules: [Navigation],
				slidesPerView: 4,
				spaceBetween: 16,
				grabCursor: true,
				navigation: {
					nextEl: '.main-slider__next',
					prevEl: '.main-slider__prev',
				},
				breakpoints: {
					319: {
						slidesPerView: 1,
					},
					575: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 16,
					},
				},
			});

		}

		new Swiper('.product-card__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			grabCursor: true,
			navigation: {
				prevEl: '.product-card__slider-prev',
				nextEl: '.product-card__slider-next',
			},
		});


		new Swiper('.popular-slider', {
			modules: [Navigation],
			slidesPerView: 4,
			spaceBetween: 16,
			grabCursor: true,
			navigation: {
				nextEl: '.popular-slider__next',
				prevEl: '.popular-slider__prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				575: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 5,
					spaceBetween: 16,
				},
			},
		});
		const orderSLider = new Swiper('.order-slider', {
			modules: [Navigation, EffectFade],
			slidesPerView: 1,
			grabCursor: false,
			speed: 0,
			effect: "fade",
			// loop: true,
			navigation: {
				nextEl: '.order-slider__nav-next',
				prevEl: '.order-slider__nav-prev',
			},
		});

		const myOrderItems = document.querySelectorAll('.orders-table .orders-table__number');

		myOrderItems.forEach(item => {
			item.addEventListener('click', () => {
				orderSLider.slideTo(item.dataset.orderItem)
			});
		});

		orderSLider.on('slideChange', function (e) {

		});

	}
}


window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
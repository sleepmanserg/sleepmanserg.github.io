$(document).ready(function () {
	(function ($) {
		'use strict';

		const theme = {
			init: () => {
				theme.toggler();
				theme.addRemoveActive();
				theme.heroSLider();
				theme.fantomSLider();
				theme.productsSlider();
				theme.stepsSlider();
				theme.scrollAnim();
			},

			scrollAnim: () => {
				AOS.init({
					// once: true
				});
			},

			toggler: () => {
				$(document).on('click', '.data-toggle', function () {
					let $target = $($(this).data('target'));
					let navItem = $('.scroll');
					let classes = $(this).data('classes');
					let backdrop = $(this).data('backdrop');
					let overflow = $(this).data('overflow');
					let siteBackdrop = $('.site-backdrop');
					let navClose = $('.main-nav-close');

					$target.toggleClass(classes);

					if (backdrop === true) {
						siteBackdrop.toggleClass('active');
					}
					if (overflow === true) {
						$('body').toggleClass('overflow-hidden menu-active');
						$('html').toggleClass('overflow-hidden');
					}

					siteBackdrop.on('click', function () {
						closeDisable();
					});

					navItem.on('click', function () {
						closeDisable();
					});

					return false;
				});

				function closeDisable() {
					$('.site-backdrop, .main-nav-wrapper, .menu-toggle').removeClass('active');
					$('body, html').removeClass('overflow-hidden');
					$('body').removeClass('menu-active');
				}
			},

			/* Add or remove active */
			addRemoveActive: () => {
				document.addEventListener('click', e => {
					const isTargetButton = e.target.matches('[data-target-button]');
					if (!isTargetButton && e.target.closest('[data-active]') != null) return;
					let currentTarget;
					if (isTargetButton) {
						currentTarget = e.target.closest('[data-active]');
						currentTarget.classList.toggle('active');
					}
					document.querySelectorAll('[data-active].active').forEach(item => {
						if (item == currentTarget) return;
						item.classList.remove('active');
					});
				});
			},

			/** Hero slider */
			heroSLider: () => {
				$('.hero-slider').slick({
					slidesToShow: 1,
					arrows: true,
					speed: 500,
					dots: true,
					appendDots: '.hero-slider__dots',
					nextArrow: '.hero-controls__next',
					prevArrow: '.hero-controls__prev'
				});
			},

			fantomSLider: () => {
				$('.fantom-slider').slick({
					slidesToShow: 1,
					arrows: true,
					speed: 500,
					dots: true,
					appendDots: '.fantom-slider__dots',
					nextArrow: '.fantom-controls__next',
					prevArrow: '.fantom-controls__prev'
				});
			},

			/** Products home slider */
			productsSlider: () => {
				// setup
				let sliderElem = $(".products-slider"),
				sliderBool = false,
				sliderBreakpoint = 768,

				sliderSettings = {
						arrows: false,
						dots: true,
						mobileFirst: true,
						slidesToShow: 1,
						responsive: [
								{
										breakpoint: sliderBreakpoint,
										settings: "unslick"
								}
						]
				};
				function sliderInit() {
				if (window.innerWidth <= sliderBreakpoint) {
					if (sliderBool == false) {
							sliderElem.slick(sliderSettings);
							sliderBool = true;
					}
				} else {
						sliderBool = false;
					}
				}

				// resize
				$(window).resize(function () {
					sliderInit();
				});
				if (window.innerWidth <= sliderBreakpoint) {
					sliderInit();
				}
			},

			stepsSlider: () => {
				// setup
				let sliderElem = $(".steps-row"),
				sliderBool = false,
				sliderBreakpoint = 575,

				sliderSettings = {
						arrows: false,
						dots: true,
						mobileFirst: true,
						slidesToShow: 1,
						centerMode: true,
						responsive: [
								{
										breakpoint: sliderBreakpoint,
										settings: "unslick"
								}
						]
				};
				function sliderInit() {
				if (window.innerWidth <= sliderBreakpoint) {
					if (sliderBool == false) {
							sliderElem.slick(sliderSettings);
							sliderBool = true;
					}
				} else {
						sliderBool = false;
					}
				}

				// resize
				$(window).resize(function () {
					sliderInit();
				});
				if (window.innerWidth <= sliderBreakpoint) {
					sliderInit();
				}
			},

		}
		theme.init();
	})(jQuery);

});

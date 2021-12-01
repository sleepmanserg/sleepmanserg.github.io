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
				theme.passwordShow();
				theme.touchDevice();
				theme.dynamicAdaptive();
				theme.vhMobFix();
			},

			/** VH mobile fix */

			vhMobFix: () => {
				// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
				let vh = window.innerHeight * 0.01;
				// Then we set the value in the --vh custom property to the root of the document
				document.documentElement.style.setProperty('--vh', `${vh}px`);
			},

			/** Dyneamic adaptive */

			dynamicAdaptive: () => {
				const da = new DynamicAdapt("max");
				da.init();
			},

			touchDevice: () => {
				function isTouchScreendevice() {
					return (('ontouchstart' in window) ||
					(navigator.maxTouchPoints > 0) ||
					(navigator.msMaxTouchPoints > 0));
				};
				if (isTouchScreendevice()) {
					document.querySelector('body').classList.toggle('is-touch');
				} else {
					document.querySelector('body').classList.toggle('not-touch');
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
						document.querySelector('body').classList.toggle('overflow-hidden');
						document.querySelector('body').classList.toggle('backdrop');
					}
					document.querySelectorAll('[data-active].active').forEach(item => {
						if (item == currentTarget) return;
						item.classList.remove('active');
						document.querySelector('body').classList.toggle('overflow-hidden');
						document.querySelector('body').classList.toggle('backdrop');
					});
				});
			},

			passwordShow: () => {
				const togglePassword = document.querySelector('#togglePassword');
				const password = document.querySelector('#id_password');

				togglePassword.addEventListener('click', function (e) {
					const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
					password.setAttribute('type', type);
					this.classList.toggle('active');
				});
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

					$('.data-toggle').on('click', function () {
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

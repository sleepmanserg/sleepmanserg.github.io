$(document).ready(function () {
	(function ($) {
		'use strict';
		let currentTarget;
		const theme = {
			init: () => {
				theme.toggler();
				theme.menuHeight();
				theme.addRemoveActive();
				theme.subMenu();
				theme.heroSLider();
				theme.fantomSLider();
				theme.productsSlider();
				theme.stepsSlider();
				theme.passwordShow();
				theme.touchDevice();
				theme.dynamicAdaptive();
				theme.vhMobFix();
				theme.aboutSlider();
				theme.teamSlider();
				theme.scrollAnim();
				theme.filterMore();
				theme.checkboxCheck();
			},

			/** Category submenu */
			subMenu: () => {
				document.addEventListener('mouseover', e => {
					const isTargetButton = e.target.matches('[data-submenu-target]');
					if (!isTargetButton && e.target.closest('[data-submenu]') != null) {
						return;
					}

					if (isTargetButton) {
						currentTarget = e.target.closest('[data-submenu]');
						currentTarget.classList.toggle('active');
					}
					document.querySelectorAll('[data-submenu].active').forEach(item => {
						if (item == currentTarget) return;
						item.classList.remove('active');
					});
				});

				// let menuParents = document.querySelectorAll('[data-submenu]');

				// menuParents.forEach(item => {
				// 	item.addEventListener('mouseenter', e => {
				// 		item.classList.add('active');
				// 	});
				// 	item.addEventListener('mouseleave', e => {
				// 		item.classList.remove('active');
				// 	});
				// });



			},

			/** VH mobile fix */

			vhMobFix: () => {
				let vh = window.innerHeight * 0.01;
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
					if (!isTargetButton && e.target.closest('[data-active]') != null) {
						return;
					}
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
					let classes = $(this).data('classes');
					let backdrop = $(this).data('backdrop');
					let overflow = $(this).data('overflow');
					let siteBackdrop = $('.site-backdrop');
					let closeBtn = $('.sidebar-header__close .btn');

					$target.toggleClass(classes);

					if (backdrop === true) {
						siteBackdrop.toggleClass('active');
					}
					if (overflow === true) {
						$('body').toggleClass('overflow-hidden');
						$('body').toggleClass('sidebar-active');
					}

					siteBackdrop.on('click', function () {
						closeDisable();
					});
					closeBtn.on('click', function () {
						closeDisable();
					});


					// $('.data-toggle').on('click', function () {
					// 	closeDisable();
					// });

					return false;
				});

				function closeDisable() {
					$('.site-backdrop').removeClass('active');
					$('.sidebar').removeClass('active');
					$('body').removeClass('overflow-hidden');
					$('body').removeClass('sidebar-active');
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

			aboutSlider: () => {
				$('.history-slider').slick({
					slidesToShow: 7,
					slidesToScroll: 0,
					asNavFor: '.history-slider__description',
					dots: false,
					centerMode: true,
					focusOnSelect: true,
					draggable: false,
					responsive: [
						{
							breakpoint: 991,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
								infinite: true,
								draggable: true,
								dots: false,
								arrows: false,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: true,
								draggable: true,
								dots: false,
								arrows: false,
								centerMode: false,
							}
						},
					]
				});
				$('.history-slider__description').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					draggable: false,
					fade: true,
					asNavFor: '.history-slider',
					responsive: [
						{
							breakpoint: 991,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: true,
								draggable: true,
								dots: false,
								arrows: false,
								fade: false
							}
						}
					]
				});
			},

			teamSlider: () => {
				$('.team-slider').slick({
					slidesToShow: 1,
					arrows: true,
					speed: 500,
					dots: true,
					appendDots: '.team-slider__dots',
					nextArrow: '.team-controls__next',
					prevArrow: '.team-controls__prev'
				});
			},

			/** Filter more btn */

			filterMore: () => {
				document.addEventListener('click', e => {
					const isTargetButton = e.target.matches('[data-more]');
					if (!isTargetButton && e.target.closest('[data-active-list]') != null) {
						return;
					}
					if (isTargetButton) {
						currentTarget = e.target.closest('[data-active-list]');
						currentTarget.classList.toggle('active');
					}
				});
			},

			/** Menu height */

			menuHeight: () => {
				$(window).on("resize", function() {

					let winHeight = $(window).height();
					let headerHeight = $(".header").height();
					$('.main-nav-wrapper__inner').height(winHeight - headerHeight);
				});
				$(window).trigger('resize');
			},

			/** Color count */

			checkboxCheck: () => {
				$(".sidebar-checkbox .check__input").click(function() {
					$(this).toggleClass('active');
					if($(".sidebar-checkbox .check__input").hasClass('active')) {
						$('.filter-submit__btn').addClass('is-visible');
					} else {
						$('.filter-submit__btn').removeClass('is-visible');
					}
				});
			},

		}
		theme.init();
	})(jQuery);

});

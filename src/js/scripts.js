$(document).ready(function () {
	(function ($) {
		'use strict';

		const theme = {
			init: () => {
				// theme.preloader();
				theme.toggler();
				theme.smoothScroll();
				// theme.mainNav();
				theme.addRemoveActive();
				theme.stickyHeader();
				theme.spaSlider();
				theme.expSlider();
				theme.diningSlider();
				theme.storySlider();
				theme.scrollReveal();
				theme.gallerySlider();
				theme.fullYear();
				theme.customSelect();
			},

			customSelect: () => {
				$('select').each(function(){
					let $this = $(this), numberOfOptions = $(this).children('option').length;

					$this.addClass('select-hidden');
					$this.wrap('<div class="select"></div>');
					$this.after('<div class="select-styled"></div>');

					let $styledSelect = $this.next('div.select-styled');
					$styledSelect.text($this.children('option').eq(0).text());

					let $list = $('<ul />', {
							'class': 'select-options'
					}).insertAfter($styledSelect);

					for (let i = 0; i < numberOfOptions; i++) {
							$('<li />', {
									text: $this.children('option').eq(i).text(),
									rel: $this.children('option').eq(i).val()
							}).appendTo($list);
					}

					let $listItems = $list.children('li');


					$styledSelect.click(function(e) {
							e.stopPropagation();
							$('div.select-styled.active').not(this).each(function(){
									$(this).removeClass('active').next('ul.select-options').hide();
									$(this).closest($('.booking-services__dropdown-wrapper')).removeClass('active');
							});
							$(this).toggleClass('active').next('ul.select-options').toggle();
							$(this).closest($('.booking-services__dropdown-wrapper')).addClass('active');
					});

					$listItems.click(function(e) {
							e.stopPropagation();
							$styledSelect.text($(this).text()).removeClass('active');
							$this.val($(this).attr('rel'));
							$list.hide();
							$(this).closest($('.booking-services__dropdown-wrapper')).removeClass('active');
							$(this).closest($('.booking-services__dropdown-wrapper')).addClass('selected');

							if($(this).closest($('.booking-services__dropdown-wrapper')).hasClass('selected')) {
								$($(this).closest($('.booking-services__dropdown-wrapper')).siblings().removeClass('selected'));
								$(this).closest($('.booking-services__dropdown-wrapper')).siblings($('.book-link')).removeClass('active');
								defaultTextFunc();
							}
					});

					let defaultTextFunc = function() {
						$('.booking-services__dropdown-wrapper').each(function() {
							if (!$(this).hasClass("selected")) {
								let defaultText = $(this).find('.select-styled').next($list).children().first().text();
								$(this).find('.select-styled').text(defaultText);
							}
						});
					}

					let links = $('.book-link');

					links.each(function() {
						$(this).click(function() {
							$(this).addClass('active').siblings().removeClass('active');
							$(this).addClass('active').siblings($('.booking-services__dropdown-wrapper')).removeClass('selected');
							defaultTextFunc();
							// $($(this).find($('.booking-services__dropdown-wrapper')).removeClass('selected'));
						});
					});

					$(document).click(function() {
						$styledSelect.removeClass('active');
						$list.hide();
						$('.booking-services__dropdown-wrapper').removeClass('active');
					});

				});
			},

			scrollReveal: () => {

				gsap.registerPlugin(ScrollTrigger);

				let revealContainers = document.querySelectorAll(".reveal");

				revealContainers.forEach((container) => {
					let image = container.querySelector("img");
					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: container,
							start: "bottom bottom",
							end: "+=20" ,
							// toggleActions: "restart none none reset",
						}
					});

					tl.set(container, { autoAlpha: 1 });
					tl.from(container, 1.5, {
						yPercent: -100,
						ease: Power4.out,
					});
					tl.from(image, 1.5, {
						yPercent: 100,
						delay: -1.5,
						ease: Power4.out
					});
				});

				let textContainers = document.querySelectorAll(".textReveal");

				textContainers.forEach((container) => {
					let text = container.querySelector(".text");
					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: container,
							start: "bottom bottom",
							end: "+=10",
							// toggleActions: "restart none none reset",
						}
					});

					tl.set(container, { autoAlpha: 1 });
					tl.from(container, 1, {
						y: '-50%',
						ease: Power1.out,
						opacity: 0,
					});
					tl.from(text, 1, {
						y: '0',
						// delay: -.8,
						ease: Power1.out,
						opacity: 1,
					});
					tl.pause();
				});

				let widthContainers = document.querySelectorAll(".underlineReveal");

				widthContainers.forEach((container) => {
					let text = container.querySelector(".text-underline-spa");
					let tl4 = gsap.timeline({
						scrollTrigger: {
							trigger: container,
						}
					});

					tl4.set(container, { autoAlpha: 1 });
					tl4.from(text, 1, {
						width: 0,
						ease: Power1.out,
					});
					tl4.to(text, {width: '100%', duration: 1.5, opacity: 1, delay: .1, ease: Power1.out,});
				});

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".admission",
					}
				})

				tl.to('.text-underline', {width: '100%', duration: 1.5, opacity: 1, delay: 1, ease: Power1.out,});

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
					$('.site-backdrop, .main-nav, .menu-toggle').removeClass('active');
					$('body, html').removeClass('overflow-hidden');
					$('body').removeClass('menu-active');
				}
			},

			/** Smooth scroll **/
			smoothScroll: () => {
				$('a.scroll').click(function() {
					if (
						window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&  window.location.hostname == this.hostname
					) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
						if (target.length) {
								$('html,body').animate({
										scrollTop: target.offset().top - 70
								}, 1000);
								return false;
						}
					}
				});
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

			/** Sticky header on scroll */
			stickyHeader: () => {

				let header  = document.querySelector('.header');

				window.addEventListener('scroll', function () {
						let getScrollposition = window.scrollY;
						if (getScrollposition > 130) {
								header.classList.add('is-fixed')
						} else {
							header.classList.remove('is-fixed')
						}
				});

				/********* IF VIDEO BACKGROUND */

				// let videos = document.getElementsByTagName("video"),
				// fraction = 0.5;
				// function checkScroll() {
				// 	for(let i = 0; i < videos.length; i++) {
				// 		let video = videos[i];
				// 		let x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
				// 			b = y + h, //bottom
				// 			visibleX, visibleY, visible;

				// 			visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
				// 			visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

				// 			visible = visibleX * visibleY / (w * h);

				// 			if (visible > fraction) {
				// 					video.play();
				// 			} else {
				// 					video.pause();
				// 			}
				// 	}
				// }
				// window.addEventListener('scroll', checkScroll, false);
				// window.addEventListener('resize', checkScroll, false);

				/********* IF VIDEO BACKGROUND */

			},

			/** Spa slider */
			spaSlider: () => {
				$('.spa-slider').slick({
					slidesToShow: 2,
					arrows: true,
					infinite: false,
					responsive: [
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 576,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
					]
				});
			},

			/** Experience slider */

			expSlider: () => {
				$('.exprience-slider').slick({
					slidesToShow: 1,
					arrows: true,
					infinite: false,
					fade: true,
					draggable: false,
					speed: 700
				});
			},

			/** Dining slider **/
			diningSlider: () => {
				$('.dining-slider').slick({
					slidesToShow: 1,
					arrows: true,
					infinite: false,
					fade: true,
					draggable: false,
					speed: 700
				});
			},

			/** Our story slider **/

			storySlider: () => {
				$('.our-story-slider').slick({
					slidesToShow: 1,
					arrows: true,
					infinite: false,
					draggable: true,
					speed: 700
				});
			},

			/** Get full year */

			/* Gallery slider */

			gallerySlider: () => {
				$('.gallery-slider').slick({
					slidesToShow: 1,
					arrows: true,
					infinite: false,
					draggable: true,
					speed: 700,
					centerMode: false,
				});
			},

			fullYear: () => {
				function fullYearFunction() {
					let date = new Date();
					let year = date.getFullYear();
					document.getElementById("copyright").innerHTML = year;
				}
				fullYearFunction();
			},
		}

		theme.init();

	})(jQuery);

});

/** Preloader */

document.addEventListener("DOMContentLoaded", function(event) {

	let header = document.querySelector('.header');
	let preloader = document.querySelector('#preloader');
	const lockPaddingValue = window.innerWidth - document.querySelector('.content').offsetWidth + 'px';
	document.body.style.paddingRight = lockPaddingValue;
	header.style.paddingRight = lockPaddingValue;
	document.body.style.overflow = 'hidden';

	$('.modal').on('show.bs.modal', function () {
		header.style.paddingRight = lockPaddingValue;
		document.body.style.paddingRight = lockPaddingValue;
		document.body.style.overflow = 'hidden';
	});
	$('.modal').on('hidden.bs.modal', function (e) {
		header.style.paddingRight = 0;
		document.body.style.overflowY = 'auto';
		document.body.style.paddingRight = 0;
	});

	function add_img() {
		let img = document.createElement('img');
			img.src = '../img/logo-preloader.gif';
		document.getElementById('preloader').appendChild(img);
	}
	add_img();
	let gifSource = $('#preloader img').attr('src');
	$('#preloader img').attr('src', "");
	$('#preloader img').attr('src', gifSource+"?"+new Date().getTime());
	window.onload = function() {
		window.requestAnimationFrame(function() {
			let intro = gsap.timeline({
				paused: false
			});
			intro.to("#preloader", 1, {
				opacity: 0,
				ease: "easeInOut",
				delay: 3.8,
				onComplete:function(){
					document.querySelector('.content').classList.remove('is-loading');
					header.style.paddingRight = 0;
					document.body.style.paddingRight = 0;
					preloader.style.marginRight = 0;
					document.body.style.overflowY = 'auto';
				}
			});
		});
	};

});


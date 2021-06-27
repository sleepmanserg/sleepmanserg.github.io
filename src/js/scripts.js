//
// Custom Scripts
// --------------------------------------------------

;(function ($) {
  'use strict';

  const theme = {
    init: () => {
      $('.slick-carousel').slick();
      $('.stocks-carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow',
        infinit: true,
        draggable: false,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
      $('.hero-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        dots: true
      });
      theme.checkDevice();
      theme.toggler();
      theme.loginToggler();
      theme.infoListSlider();
      theme.paymentSlider();
      theme.promoSlider();
      theme.productActive();
      theme.inputPlusMinus();
      theme.validateForms();
      theme.floatingSearchBar();
      theme.autocomplete();
      theme.addToCartBtn();
    },
    checkDevice: () => {
      /** If mobile or pc */

      const isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
      };

      if (isMobile.any()) {
        document.body.classList.add('_isTouch');
      } else {
        document.body.classList.add('_isPc');
      }
    },
    /** Info list slider */
    infoListSlider: () => {
      // setup
      let sliderElem = $(".info-slider"),
      sliderBool = false,
      sliderBreakpoint = 768,

      sliderSettings = {
          arrows: false,
          dots: true,
          mobileFirst: true,
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
    /** Payment list slider */
    paymentSlider: () => {
      // setup
      let sliderElem = $(".payment-slider"),
      sliderBool = false,
      sliderBreakpoint = 768,

      sliderSettings = {
          arrows: false,
          dots: true,
          mobileFirst: true,
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
    /** Promo slider */
    promoSlider: () => {
      // setup
      let sliderElem = $(".promo-slider"),
      sliderBool = false,
      sliderBreakpoint = 768,

      sliderSettings = {
          arrows: false,
          dots: true,
          mobileFirst: true,
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
    /** Form validation */
    validateForms: () => {

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      let forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add('was-validated')
          }, false);
        });
    },
    /** Search bar show/hide */
    floatingSearchBar: () => {
      $(document).on('click', '.data-toggle', function () {
        let $target = $($(this).data('target'));
        let classes = $(this).data('classes');
        let backdrop = $(this).data('backdrop');
        let siteBackdrop = $('.site-backdrop');


        $target.toggleClass(classes);

        siteBackdrop.on('click', function (e) {
          closeDisable();
        });

        return false;
      });

      function closeDisable() {
        $('.site-backdrop, .search-hide, .search-form').removeClass('searchBarActive');
      }
    },
    /** Search form autocomplete */
    autocomplete: () => {
      let datasrc = [
        {label: 'Фила с тунцом', value: 'opt1'},
        {label: 'Филадельфия', value: 'opt2'},
      ];
      const ac = new Autocomplete(document.getElementById('searchFormAutoComplete'), {
        data: datasrc
      });
    },
    /** Add class for product card */
    productActive: () => {
      let categoryProductCard = $('.product__card');
      categoryProductCard.hover(function() {
        $(this).toggleClass('active');
      });
    },
    /** Input +/- increment */
    inputPlusMinus: () => {
      $('.minus').on('click', function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });

      $('.plus').on('click', function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    },
    /** Add to cart button text change and class  */
    addToCartBtn: () => {
      let addToCartButton = $('.addToCartBtn');
      addToCartButton.on("click", function() {
        let el = $(this);
        let addMessage = $('.add-message');

        el.toggleClass('active');
        el.text() == el.data("text-swap")
          ? el.text(el.data("text-original"))
          : el.text(el.data("text-swap"));
        el.next().css('display', 'block');
        el.css('display', 'none');

        addMessage.fadeIn("slow").delay(1000).fadeOut("slow");

      });
    },
    toggler: () => {
      $(document).on('click', '.menu-toggle', function () {
        let $target = $($(this).data('target'));
        let classes = $(this).data('classes');
        let backdrop = $(this).data('backdrop');
        let overflow = $(this).data('overflow');
        let siteBackdrop = $('.site-backdrop');
        let mainNavClose = $('.mobile-nav-close');

        $target.toggleClass(classes);

        if (backdrop === true) {
          siteBackdrop.toggleClass('active');
        }
        if (overflow === true) {
          $('body').toggleClass('overflow-hidden');
          $('html').toggleClass('overflow-hidden');
        }

        siteBackdrop.on('click', function () {
          closeDisable();
        })
        mainNavClose.on('click', function() {
          closeDisable();
        });

        return false;
      });

      function closeDisable() {
        $('.site-backdrop, .main-nav').removeClass('active');
        $('body').removeClass('overflow-hidden');
        $('html').removeClass('overflow-hidden');
      }
    },
    loginToggler: () => {
      if ($('body').hasClass('_isTouch')) {
        loginMobile();
      }
      function loginMobile() {
        $(document).on('click', '.btn-login', function () {
          let $target = $($(this).data('target'));
          let classes = $(this).data('classes');
          let backdrop = $(this).data('backdrop');
          let overflow = $(this).data('overflow');
          let siteBackdrop = $('.site-backdrop');

          $target.toggleClass(classes);

          if (backdrop === true) {
            siteBackdrop.toggleClass('active');
          }
          if (overflow === true) {
            $('body').toggleClass('overflow-hidden');
            $('html').toggleClass('overflow-hidden');
          }

          siteBackdrop.on('click', function () {
            closeDisable();
          })

          return false;
        });
      }

      function closeDisable() {
        $('.site-backdrop, .mobile-login').removeClass('active');
        $('body').removeClass('overflow-hidden');
        $('html').removeClass('overflow-hidden');
      }
    }
  }

  theme.init();

})(jQuery);

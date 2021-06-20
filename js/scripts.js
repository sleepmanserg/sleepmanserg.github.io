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
      theme.toggler();
      theme.loginToggler();
      theme.infoListSlider();
      theme.promoSlider();
      theme.scrollToTab();
      theme.productActive();
      theme.inputPlusMinus();
      theme.validateForms();
      theme.floatingSearchBar();
      theme.autocomplete();
      theme.addToCartBtn();
      theme.showCart();
      // theme.stickyCategoryHeader();

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

    /** Scroll to active tab */
    scrollToTab: () => {
      $('.category-btn__wrapper').on('shown.bs.tab', function(e) {
        let dataTab = $(this).data('bs-target');
        $('html, body').animate({
          scrollTop: $(dataTab).offset().top
        }, '150');
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
        let cartFooter = $('.cart-footer');
        let cartHeaderMsg = $('.cart-header-msg');
        let body = $('body');
        let cartNotEmpty = $('.cart-footer-cart-not-empty');
        el.toggleClass('active');
        el.text() == el.data("text-swap")
          ? el.text(el.data("text-original"))
          : el.text(el.data("text-swap"));
        // if(addToCartButton.hasClass('active')) {
        //   cartFooter.slideDown('300', function() {
        //     cartFooter.addClass('active');
        //   });
        //   cartHeaderMsg.slideDown('300', function () {
        //     cartHeaderMsg.addClass("active");
        //   });
        //   setTimeout(function() {
        //     cartHeaderMsg.slideUp('300', function () {
        //       cartHeaderMsg.removeClass("active");
        //     });
        //   }, 5000);
        //   body.addClass('cart-not-empty');
        // } else {
        //   cartFooter.slideUp('300', function() {
        //     cartFooter.removeClass('active');
        //   });

        //   body.removeClass('cart-not-empty');
        // }
        // if(body.hasClass('cart-not-empty')) {
        //   cartNotEmpty.addClass('active');
        // } else {
        //   cartNotEmpty.removeClass('active');
        // }
      });
      // if($('.cart .cart-item').length > 1) {
      //   $('.cart').addClass('has-items');
      // } else {
      //   $('.cart').removeClass('has-items');
      // }
    },

    showCart: () => {
      // $('.btn-topbar__cart').on('click', function() {
      //   $('body').toggleClass('overflow-hidden');
      //   $('#cart').toggleClass('active');
      //   $('.site-backdrop').toggleClass('active');
      // });
      // $('.site-backdrop').on('click', function() {
      //   $('body').toggleClass('overflow-hidden');
      //   $('#cart').toggleClass('active');
      //   $('.site-backdrop').toggleClass('active');
      // });
      // $('.cart-close').on('click', function() {
      //   $('body').toggleClass('overflow-hidden');
      //   $('#cart').toggleClass('active');
      //   $('.site-backdrop').toggleClass('active');
      // });
    },


    // stickyCategoryHeader: () => {
    //   let categoryHeader = $('.category-header');
    //   if (categoryHeader.length) {
    //     $(window).on('scroll', function() {
    //       if($(this).scrollTop() > 300) {
    //         categoryHeader.addClass('header-stuck');
    //         $('body').addClass('header-stucked');
    //       } else {
    //         categoryHeader.removeClass('header-stuck');
    //         $('body').removeClass('header-stucked');
    //       }
    //     });
    //   }
    // },

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
      // $(window).resize(function () {
      //   loginMobile();
      // });
      if (window.innerWidth <= 992) {
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

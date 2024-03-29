/*
Code goes to final js file only when function is called, for example flsFunctions.spollers();
Or when all file was imported, for example "files/script.js";
Code that was not called or imported doesn't go to final js file.

If you want to add module than you should uncomment it
*/

// Turn on console notifications when in development mode
// window['FLS'] = true;

// Base styles import
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Functions ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

// If webp images browser support
flsFunctions.isWebp();
/* Add touch class if browser is mobile*/
// flsFunctions.addTouchClass();
/* Add class when website fully loaded */
flsFunctions.addLoadedClass();
/* Module for mobile menu or burger menu */
flsFunctions.menuInit();
/* For mobiles for example IOS to include height for bottom actions menu in safari */
// flsFunctions.fullVHfix();

/*
Module spolers
*/
// flsFunctions.spollers();

/*
Module tabs
*/
// flsFunctions.tabs();

/*
Module show more
*/
// flsFunctions.showMore();

/*
Module ripple effects
*/
// flsFunctions.rippleEffect();

/*
Module custom cursor
*/
// flsFunctions.customCursor(true);

/*
Module popups
*/
import './libs/popup.js'

/*
Module for parallax mouse move
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Forms  ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Input forms */
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
/*
*/
/* Form send */
flsForms.formSubmit();

// Form quantity module
// flsForms.formQuantity();

/* Star rating module */
// flsForms.formRating();

/* Custom select module */
// import './libs/select.js'

/* Calendar module */
// import './files/forms/datepicker.js'

/* Input mask*/
/*
Import and turn on in file js/files/forms/inputmask.js
*/
import "./files/forms/inputmask.js";

/* Range slider module */
/*
Import and turn on in file у файлі js/files/forms/range.js
*/
// import "./files/forms/range.js";

/* Tooltips module */
/*
turn on for plugin Tippy.js and settigs are in file js/files/tippy.js
Plugin documentation: https://atomiks.github.io/tippyjs/
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// swiper slider plugin ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Settings and turn on for slider plugon are in file js/files/sliders.js
Plugin documentation: https://swiperjs.com/
*/
//import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Modules for page scroll ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Custom scrollbar
add data-simplebar
*/
// import './files/scroll/simplebar.js';

// Lazy image loading
// Plugin documentation: https://github.com/verlok/vanilla-lazyload
// import './files/scroll/lazyload.js';

// Watcher for objects with attribute data-watch
import './libs/watcher.js'

// Full page scroll module
// import './libs/fullpage.js'

// Parallax module
// import './libs/parallax.js'

// Functions for working with scrolls
import * as flsScroll from "./files/scroll/scroll.js";

// Smooth page navigation
// flsScroll.pageNavigation();

// Sticky header
flsScroll.headerScroll();

// Sticky block
// flsScroll.stickyBlock();

// Module for counters animation
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Gallery ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Other plugins ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Dynamic adaptive */
// import "./libs/dynamic_adapt.js";

/* wNumb */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Other ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Our custom js file */
import "./files/script.js";
//============================================================================================================================================================================================================================================
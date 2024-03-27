// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

var path = window.location.href;
// because the 'href' property of the DOM element is the absolute path
const headerLinks = document.querySelectorAll('.header-nav__link');
headerLinks.forEach(link => {
	if (link.href === path) {
		link.parentElement.classList.add('active');
	}
});
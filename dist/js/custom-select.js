/** Селект цвета */
function formatStateColor(state) {
	if (!state.id) {
		return state.text;
	}
	var baseUrl = "./img/card-colors/";
	var $stateImg = $(
		'<div class="card-color-img"><span class="state-title">Цвет</span><div class="state-img-wrapper"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span class="state-text">' + state.text + '</span></div>' + '<i class="icon-chevron-down-sm">' + '</i>' + '</div>'
	);
	$stateImg.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
	return $stateImg;
};

function formatStateColorInner(state) {
	if (!state.id) {
		return state.text;
	}
	var baseUrl = "./img/card-colors/";
	var $stateImg = $(
		'<div class="card-color-img"><div><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span class="state-text">' + state.text + '</span>' + '</div>' + '<div class="product-availability__stock product-availability__status">' + '<span>В наличии</span>' + '</div>' + '</div>'
	);
	$stateImg.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
	return $stateImg;
};

/** Селект цвета */

/** Селект Покрытия */
function formatStateCover(state) {
	if (!state.id) {
		return state.text;
	}
	var baseUrl = "./img/card-colors/";
	var $stateImg = $(
		'<div class="card-color-img"><span class="state-title">Покрытие</span><div class="state-img-wrapper"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span class="state-text">' + state.text + '</span></div>' + '<i class="icon-chevron-down-sm">' + '</i>' + '</div>'
	);
	$stateImg.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
	return $stateImg;
};

function formatStateCoverInner(state) {
	if (!state.id) {
		return state.text;
	}
	var baseUrl = "./img/card-colors/";
	var $stateImg = $(
		'<div class="card-color-img"><div class="state-img-wrapper"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span class="state-text">' + state.text + '</span></div>' + '<i class="icon-chevron-down-sm">' + '</i>' + '</div>'
	);
	var $stateImg = $(
		'<div class="card-color-img"><div><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span class="state-text">' + state.text + '</span>' + '</div>' + '<div class="product-availability__stock product-availability__status">' + '<span>В наличии</span>' + '</div>' + '</div>'
	);
	return $stateImg;
};
/** Селект Покрытия */

/** Селект Комплектация */
function formatStateEquip(state) {
	if (!state.id) {
		return state.text;
	}
	var baseUrl = "./img/card-colors/";
	var $stateImg = $(
		'<div class="card-color-img"><span class="state-title">Комплектация</span><div class="state-img-wrapper"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span class="state-text">' + state.text + '</span></div>' + '<i class="icon-chevron-down-sm">' + '</i>' + '</div>'
	);
	$stateImg.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
	return $stateImg;
};

function formatStateEquipInner(state) {
	if (!state.id) {
		return state.text;
	}
	var baseUrl = "./img/card-colors/";
	var $stateImg = $(
		'<div class="card-color-img"><div class="state-img-wrapper"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span class="state-text">' + state.text + '</span></div>' + '<i class="icon-chevron-down-sm">' + '</i>' + '</div>'
	);
	var $stateImg = $(
		'<div class="card-color-img"><div><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + '<span class="state-text">' + state.text + '</span>' + '</div>' + '<div class="product-availability__stock product-availability__status">' + '<span>В наличии</span>' + '</div>' + '</div>'
	);
	return $stateImg;
};
/** Селект Комплектация */

$('.select-color').select2({
	minimumResultsForSearch: -1,
	templateResult: formatStateColorInner,
	templateSelection: formatStateColor,
	theme: "select-dropdown",
	dropdownPosition: 'below'
});
$('.select-cover').select2({
	minimumResultsForSearch: -1,
	templateResult: formatStateCoverInner,
	templateSelection: formatStateCover,
	theme: "select-dropdown",
	dropdownPosition: 'below'
});
$('.select-equipment').select2({
	minimumResultsForSearch: -1,
	templateResult: formatStateEquipInner,
	templateSelection: formatStateEquip,
	theme: "select-dropdown",
	dropdownPosition: 'below'
});

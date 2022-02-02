let stateOutput;

/** Селект тип цилиндра */
function formatStateType(state) {
	if (!state.id) {
		return state.text;
	}
	let baseUrl;
	baseUrl = "img/card-colors";

	stateOutput = $(`
		<ul class="card-select-list">
			<li class="state-title">Тип циліндра</li>
			<li class="state-img-wrapper">
				<img class="img-flag" src="${ baseUrl } + '/' + ${state.element.value.toLowerCase()} + '.png'" />
				<span class="state-text">${state.text}</span>
			</li>
		</ul>
	`);

	stateOutput.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
	return stateOutput;
};

function formatStateTypeInner(state) {
	if (!state.id) {
		return state.text;
	}
	let baseUrl;
	baseUrl = "img/card-colors";
	stateOutput = $(`
		<ul class="card-select-list card-select-list__type">
			<li class="state-img-wrapper">
				<img class="img-flag" src="${ baseUrl } + '/' + ${state.element.value.toLowerCase()} + '.png'" />
				<span class="state-text">${state.text}</span>
				<span class="product-availability__stock product-availability__status">${ $(state.element).attr("data-text") }</span>
			</li>
		</ul>
	`);
	stateOutput.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
	return stateOutput;
};

/** Селект тип цилиндра */

/** Селект Покрытия */
function formatStateLength(state) {
	if (!state.id) {
		return state.text;
	}
	stateOutput = $(`
		<ul class="card-select-list">
			<li class="state-title">Довжина</li>
			<li class="state-img-wrapper">
				<span class="state-text">${state.text}</span>
			</li>
		</ul>
	`);
	return stateOutput;
};

function formatStateLengthInner(state) {
	if (!state.id) {
		return state.text;
	}
	stateOutput = $(`
		<ul class="card-select-list">
			<li class="state-img-wrapper">
				<span class="state-text">${state.text}</span>
			</li>
			<li class="product-availability__stock product-availability__status">${ $(state.element).attr("data-text") }</li>
		</ul>
	`);
	return stateOutput;
};
/** Селект Покрытия */

/** Селект Симметрия */
function formatStateSymmetry(state) {
	if (!state.id) {
		return state.text;
	}
	stateOutput = $(`
		<ul class="card-select-list">
			<li class="state-title">Симетрія</li>
			<li class="state-img-wrapper">
				<span class="state-text">${state.text}</span>
			</li>
		</ul>
	`);
	return stateOutput;
};

function formatStateSymmetryInner(state) {
	if (!state.id) {
		return state.text;
	}
	stateOutput = $(`
		<ul class="card-select-list">
			<li class="state-img-wrapper">
				<span class="state-text">${state.text}</span>
			</li>
			<li class="product-availability__stock product-availability__status">${ $(state.element).attr("data-text") }</li>
		</ul>
	`);
	return stateOutput;
};
/** Селект Симметрия */

$('.select-cylinder-type').select2({
	minimumResultsForSearch: -1,
	templateResult: formatStateTypeInner,
	templateSelection: formatStateType,
	theme: "select-dropdown",
});
$('.select-length').select2({
	minimumResultsForSearch: -1,
	templateResult: formatStateLengthInner,
	templateSelection: formatStateLength,
	theme: "select-dropdown",
});
$('.select-symmetry').select2({
	minimumResultsForSearch: -1,
	templateResult: formatStateSymmetryInner,
	templateSelection: formatStateSymmetry,
	theme: "select-dropdown",
});


console.log('test');
"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function check(value) {
		if (value === "true" || value === "false") {
			return "Boolean";
		}

		return "Not Boolean";
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		check(this.children[0].value);
	});
};
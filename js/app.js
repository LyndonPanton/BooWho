"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function check(value) {
		if (value === "true" || value === "false") {
			return display("Boolean");
		} else if (value === "") {
			return display("???");
		}

		return display("Not Boolean");
	}

	function display(result) {
		document.getElementById("display").textContent = result;
	}

	// For devices which do not support the input event
	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		check(this.children[0].value);
	});

	let input = document.getElementById("form-string");
	input.addEventListener("input", function(event) {
		check(this.value);
	});
};
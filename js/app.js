"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function check(value) {
		if (value === "true" || value === "false") {
			return display("Boolean");
		}

		return display("Not Boolean");
	}

	function display(result) {
		document.getElementById("display").textContent = result;
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		check(this.children[0].value);
	});
};
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

	function toggle() {
		let task = document.getElementsByTagName("div")[0];

		if (Array.from(task.classList).indexOf("visible") === -1) {
			console.log(2);
			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			task.classList.remove("visible");
			task.classList.add("hidden");
		}
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

	let chevron = document.getElementsByClassName("fas")[0];
	chevron.addEventListener("click", toggle);
};
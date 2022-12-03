import "regenerator-runtime"; /* for async await transpile */
import "../styles/preflight.css";
import "../styles/main.css";
import "../styles/navbar.css";

const navToggle = document.getElementById("navbar-toggle");
navToggle.addEventListener("click", function () {
	const navCollapse = document.querySelector(".navbar-collapse");
	const navContainer = document.querySelector(".navbar-container");

	navCollapse.classList.add("show");
	navContainer.classList.add("d-contents");

	navCollapse.addEventListener("click", function () {
		navCollapse.classList.remove("show");
		navContainer.classList.remove("d-contents");
	});
});

import "regenerator-runtime"; /* for async await transpile */
import "../styles/preflight.css";
import "../styles/main.css";
import "../styles/navbar.css";
import "../styles/restaurant.css";

import RestaurantService from "./services/RestaurantService.js";

document.addEventListener("DOMContentLoaded", function () {
	// handle year in footer
	document.getElementById("year").innerHTML = new Date().getFullYear();

	// handle navbar on small breakpoints
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

	// handle restaurant list
	const restaurantService = new RestaurantService();
	restaurantService.renderRestaurants();
});

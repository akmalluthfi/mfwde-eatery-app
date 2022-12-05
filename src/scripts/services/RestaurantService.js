import RestaurantRepository from "../repositories/RestaurantRepository.js";
import "../components/RestaurantCard.js";

export default class RestaurantService {
	constructor() {
		this.restaurantRepository = new RestaurantRepository();
		this.wrapper = document.getElementById("restaurant-list");
	}

	renderRestaurants() {
		this.wrapper.innerHTML = "";

		this.restaurantRepository.restaurants.forEach((restaurant) => {
			const restaurantCard = document.createElement("restaurant-card");
			restaurantCard.restaurant = restaurant;
			this.wrapper.appendChild(restaurantCard);
		});
	}
}

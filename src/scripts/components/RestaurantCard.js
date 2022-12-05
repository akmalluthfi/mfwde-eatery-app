class RestaurantCard extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	/**
	 * @param {any} restaurant
	 */
	set restaurant(restaurant) {
		this._restaurant = restaurant;
	}

	get restaurant() {
		return this._restaurant;
	}

	render() {
		this.innerHTML = `
			<div class="restaurant-card">
				<div class="badge-location">${this._restaurant.city}</div>
				<img
					src="${this._restaurant.pictureId}"
					alt="${this._restaurant.name}"
				/>
				<div class="body">
					<h4>Rating : ${this._restaurant.rating}</h4>
					<h3>${this._restaurant.name}</h3>
					<p>${this._restaurant.description}</p>
				</div>
			</div>
		`;
	}
}

customElements.define("restaurant-card", RestaurantCard);

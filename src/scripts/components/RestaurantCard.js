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
				<img
					src="https://restaurant-api.dicoding.dev/images/small/${this._restaurant.pictureId}"
					alt="${this._restaurant.name}"
				/>
				<div class="body">
          <h3><a href="/">${this._restaurant.name}</a></h3>
          <div class="rating">
            <span>&#x2B50;</span>
            <span>${this._restaurant.rating}</span>
            <span class="divider"> | </span>
            <span>${this._restaurant.city}</span>
          </div>
					<p>${this._restaurant.description}</p>
				</div>
			</div>
		`;
  }
}

customElements.define('restaurant-card', RestaurantCard);

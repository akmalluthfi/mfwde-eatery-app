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
			<article class="restaurant-card">
				<img
					src="https://restaurant-api.dicoding.dev/images/small/${this._restaurant.pictureId}"
					alt="${this._restaurant.name}"
				/>
				<div class="body">
          <h2><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h2>
          <h6 class="rating">
            <i class="fa-solid fa-star"></i>
            ${this._restaurant.rating}
            <span class="divider">&bull;</span>
            ${this._restaurant.city}
          </h6>
					<p>${this._restaurant.description}</p>
				</div>
			</article>
		`;
  }
}

customElements.define('restaurant-card', RestaurantCard);

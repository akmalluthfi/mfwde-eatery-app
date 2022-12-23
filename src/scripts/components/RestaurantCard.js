class RestaurantCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  setRestaurant(restaurant) {
    this.restaurant = restaurant;
  }

  render() {
    this.classList.add('restaurant-card');
    this.innerHTML = `
      <img
        src="https://restaurant-api.dicoding.dev/images/small/${this.restaurant.pictureId}"
        alt="${this.restaurant.name}"
      />
      <div class="body">
        <h2>
          <a href="#/detail/${this.restaurant.id}">${this.restaurant.name}</a>
        </h2>
        <h6 class="rating">
          <i class="fa-solid fa-star"></i>
          ${this.restaurant.rating}
          <span class="divider">&bull;</span>
          ${this.restaurant.city}
        </h6>
        <p>${this.restaurant.description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-card', RestaurantCard);

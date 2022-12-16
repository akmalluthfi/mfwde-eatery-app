import { CONFIG } from '../config';

class RestaurantInfo extends HTMLElement {
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
      <section class="restaurant-main-info">
        <img
          class="image"
          src="${CONFIG.IMAGE_API.MEDIUM + this._restaurant.pictureId}"
          alt="Picture ${this._restaurant.name}"
        />

        <article class="profile">
          <div class="title">
            <h2>${this._restaurant.name}</h2>
            <button class="btn-fav">
              <i class="fa-regular fa-heart fa-xl"></i>
            </button>
          </div>
          <h6 class="rating">
            <i class="fa-solid fa-star"></i>
            ${this._restaurant.rating}
            <span class="divider">&bull;</span>
            ${this._restaurant.customerReviews.length} Reviews
          </h6>
          <h6 class="categories info">
            Categories : <span>${this._restaurant.categories
              .map(({ name }) => name)
              .join(', ')}</span>
          </h6>
          <h6 class="address info">
            Address :
            <span>${this._restaurant.address}, ${this._restaurant.city}</span>
          </h6>

          <div class="description">
            <h3>Description</h3>
            <div class="read-more">
              <p class="content">${this._restaurant.description}</p>
              <a class="toogle">Show more </a>
            </div>
          </div>
        </article>
      </section>
    `;
  }
}

customElements.define('restaurant-info', RestaurantInfo);

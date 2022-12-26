import { IMAGE_API } from '../config/api-routes';
import FavoriteService from '../services/FavoriteService';

class RestaurantMainInfo extends HTMLElement {
  connectedCallback() {
    this.render();

    // handle Fav button
    this.handleFavButton();

    // handle Show more
    this.handleShowMore();
  }

  setRestaurant(restaurant) {
    this.restaurant = restaurant;
  }

  handleFavButton() {
    const favoriteService = new FavoriteService({
      btnFavContainer: this.querySelector('#btn-fav-container'),
      restaurant: this.restaurant,
    });
    favoriteService.render();
  }

  handleShowMore() {
    const readMore = this.querySelector('.read-more');
    const content = readMore.querySelector('.content');
    const toogle = readMore.querySelector('.toogle');

    if (content.scrollHeight < 100) {
      toogle.remove();
      return;
    }

    toogle.addEventListener('click', () => {
      if (content.classList.contains('show')) {
        content.classList.remove('show');
        toogle.innerHTML = 'Show more';
      } else {
        content.classList.add('show');
        toogle.innerHTML = 'Show less';
      }
    });
  }

  render() {
    const categories = this.restaurant.categories
      .map(({ name }) => name)
      .join(', ');

    this.classList.add('restaurant-main-info');

    this.innerHTML = `
      <img
        class="image"
        src="${IMAGE_API.MEDIUM + this.restaurant.pictureId}"
        alt="Picture ${this.restaurant.name}"
      />

      <article class="profile" id="main" tabindex="0">
        <div class="title">
          <h2>${this.restaurant.name}</h2>
          <div id="btn-fav-container">
            <button class="btn-fav">
              <i class="fa-regular fa-heart fa-xl"></i>
            </button>
          </div>
        </div>
        <h6 class="rating">
          <i class="fa-solid fa-star"></i>
          ${this.restaurant.rating}
          <span class="divider">&bull;</span>
          ${this.restaurant.customerReviews.length} Reviews
        </h6>
        <h6 class="categories info">Categories : <span>${categories}</span></h6>
        <h6 class="address info">
          Address :
          <span>${this.restaurant.address}, ${this.restaurant.city}</span>
        </h6>

        <div class="description">
          <h3>Description</h3>
          <div class="read-more">
            <p class="content">${this.restaurant.description}</p>
            <a class="toogle">Show more </a>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('restaurant-main-info', RestaurantMainInfo);

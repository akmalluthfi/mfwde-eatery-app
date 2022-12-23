import './MenuList';
import './Review';

class RestaurantSecondaryInfo extends HTMLElement {
  connectedCallback() {
    this.classList.add('restaurant-secondary-info');

    const foodMenus = document.createElement('menu-list');
    foodMenus.setMenus('Foods', this.restaurant.menus.foods);
    this.appendChild(foodMenus);

    const drinkMenus = document.createElement('menu-list');
    drinkMenus.setMenus('Drinks', this.restaurant.menus.drinks);
    this.appendChild(drinkMenus);

    const review = document.createElement('review-section');
    review.setReviews(this.restaurant.customerReviews);
    this.appendChild(review);
  }

  setRestaurant(restaurant) {
    this.restaurant = restaurant;
  }
}

customElements.define('restaurant-secondary-info', RestaurantSecondaryInfo);

import ReviewService from '../services/ReviewService';
import './MenuList';

class RestaurantSecondaryInfo extends HTMLElement {
  connectedCallback() {
    this.classList.add('restaurant-secondary-info');

    const foodMenus = document.createElement('menu-list');
    foodMenus.setMenus('Foods', this.restaurant.menus.foods);
    this.appendChild(foodMenus);

    const drinkMenus = document.createElement('menu-list');
    drinkMenus.setMenus('Drinks', this.restaurant.menus.drinks);
    this.appendChild(drinkMenus);

    const reviewService = new ReviewService({
      wrapper: this,
      restaurant: this.restaurant,
    });
    reviewService.render();
  }

  setRestaurant(restaurant) {
    this.restaurant = restaurant;
  }
}

customElements.define('restaurant-secondary-info', RestaurantSecondaryInfo);

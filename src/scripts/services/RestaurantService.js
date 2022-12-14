import RestaurantRepository from '../repositories/RestaurantRepository.js';
import '../components/RestaurantCard.js';

export default class RestaurantService {
  constructor() {
    this.restaurantRepository = new RestaurantRepository();
    this.wrapper = document.getElementById('restaurant-list');
  }

  async renderRestaurants() {
    this.wrapper.innerHTML = '';

    try {
      const restaurants = await this.restaurantRepository.getRestaurants();

      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;
        this.wrapper.appendChild(restaurantCard);
      });
    } catch (error) {
      this.renderMessageError(error);
    }
  }

  renderMessageError(msg) {
    this.wrapper.innerHTML = `
      <h3 style="text-align:center;color:red;margin-top:1rem;">${msg}</h3>
    `;
  }
}

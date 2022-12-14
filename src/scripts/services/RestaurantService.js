import RestaurantRepository from '../repositories/RestaurantRepository.js';
import '../components/RestaurantCard.js';
import '../components/Loader';

export default class RestaurantService {
  constructor() {
    this.restaurantRepository = new RestaurantRepository();
    this._wrapper = document.getElementById('restaurant-list');
  }

  async renderRestaurants() {
    try {
      const restaurants = await this.restaurantRepository.getRestaurants();

      this._wrapper.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;
        this._wrapper.appendChild(restaurantCard);
      });
    } catch (error) {
      this.renderMessageError(error);
    }
  }

  renderMessageError(msg) {
    this._wrapper.innerHTML = `
      <h3 style="text-align:center;color:red;margin-top:1rem;">${msg}</h3>
    `;
  }
}

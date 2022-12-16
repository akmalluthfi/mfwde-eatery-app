import RestaurantRepository from '../repositories/RestaurantRepository';
import RestaurantService from '../services/RestaurantService';
import RouteService from '../services/RouteService';

export default class RestaurantDetail {
  static render() {
    return `
      <div class="container">
        <div class="navigation-title">
          <a href="#"><i class="fa-solid fa-arrow-left fa-lg"></i></a>
          <h1>Restaurant Detail</h1>
        </div>

        <div class="restaurant-detail" id="restaurant-detail">
          <load-effect></load-effect>
        </div>
      </div>
    `;
  }

  static async afterRender() {
    const restaurantService = new RestaurantService(
      document.getElementById('restaurant-detail')
    );

    restaurantService.renderDetailRestaurant();
  }
}

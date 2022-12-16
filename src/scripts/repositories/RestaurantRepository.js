import { CONFIG } from '../config';

export default class RestaurantRepository {
  static async getRestaurants() {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const data = await response.json();

    if (!response.ok) throw data.message;

    return data.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(`${CONFIG.BASE_API_URL}detail/${id}`);
    const data = await response.json();

    if (!response.ok) throw data.message;

    return data.restaurant;
  }
}

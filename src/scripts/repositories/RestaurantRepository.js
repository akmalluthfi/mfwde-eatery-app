import { BASE_API_URL } from '../config/api-routes';

class RestaurantRepository {
  static async getAllRestaurants() {
    const response = await fetch(`${BASE_API_URL}list`);

    const data = await response.json();
    if (!response.ok) throw Error(data.message);

    return data.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(`${BASE_API_URL}detail/${id}`);

    const data = await response.json();
    if (data.error) throw Error(data.message);

    return data.restaurant;
  }
}

export default RestaurantRepository;

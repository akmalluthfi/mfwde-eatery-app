import data from '../../DATA.json';

export default class RestaurantRepository {
  async getRestaurants() {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const data = await response.json();

    if (!response.ok) throw data.message;

    return data.restaurants;
  }
}

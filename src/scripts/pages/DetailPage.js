import '../components/Loader';
import '../components/RestaurantMainInfo';
import '../components/RestaurantSecondaryInfo';
import RestaurantRepository from '../repositories/RestaurantRepository';

class DetailPage {
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

  static async afterRender({ id }) {
    const wrapper = document.getElementById('restaurant-detail');

    try {
      const restaurant = await RestaurantRepository.getDetailRestaurant(id);
      wrapper.innerHTML = '';

      const restaurantMainInfo = document.createElement('restaurant-main-info');
      restaurantMainInfo.setRestaurant(restaurant);
      wrapper.appendChild(restaurantMainInfo);

      const restaurantSecondaryInfo = document.createElement(
        'restaurant-secondary-info',
      );
      restaurantSecondaryInfo.setRestaurant(restaurant);
      wrapper.appendChild(restaurantSecondaryInfo);
    } catch (error) {
      wrapper.innerHTML = `<h3 style="text-align:center;color:red;margin-top:1rem;">${error}</h3>`;
    }
  }
}

export default DetailPage;

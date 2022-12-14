import '../components/Loader';
import '../components/RestaurantMainInfo';
import '../components/RestaurantSecondaryInfo';
import RestaurantRepository from '../repositories/RestaurantRepository';

class DetailPage {
  static render() {
    return `
      <div class="container">
        <div class="navigation-title">
          <a href="javascript:;" onclick="history.back()"><i class="fa-solid fa-arrow-left fa-lg"></i></a>
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
      const errorMessage = document.createElement('error-message');
      errorMessage.setMessage(error.message);
      wrapper.replaceChildren(errorMessage);
    }
  }
}

export default DetailPage;

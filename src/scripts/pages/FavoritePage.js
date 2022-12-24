import FavoriteRepository from '../repositories/FavoriteRepository';
import '../components/RestaurantCard';

class FavoritePage {
  static render() {
    return `
      <div class="container">
        <div class="navigation-title">
          <a href="#"><i class="fa-solid fa-arrow-left fa-lg"></i></a>
          <h1>Favorite Restaurant</h1>
        </div>

        <section class="restaurant-list" id="restaurant-list">
          <load-effect></load-effect>
        </section>
      </div>
    `;
  }

  static async afterRender() {
    const wrapper = document.getElementById('restaurant-list');

    try {
      const restaurants = await FavoriteRepository.all();

      if (!restaurants.length) {
        throw Error('You have no restaurant favorite yet');
      }

      wrapper.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.setRestaurant(restaurant);
        wrapper.appendChild(restaurantCard);
      });
    } catch (error) {
      const errorMessage = document.createElement('error-message');
      errorMessage.setMessage(error.message);
      wrapper.replaceChildren(errorMessage);
    }
  }
}

export default FavoritePage;

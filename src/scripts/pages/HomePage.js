import RestaurantRepository from '../repositories/RestaurantRepository';
import '../components/RestaurantCard';

class HomePage {
  static render() {
    return `
      <picture>
        <source
          media="(max-width: 600px)"
          srcset="./assets/images/banner-small.jpg"
        />
        <img load="lazy" class="hero-image" src="./assets/images/banner-large.jpg" alt="Banner" />
      </picture>
      <article class="container restaurant-section" id="main" tabindex="0">
        <h1 class="title">Explore Restaurant</h1>

        <section class="restaurant-list" id="restaurant-list">
          <load-effect></load-effect>
        </section>
      </article>
    `;
  }

  static async afterRender() {
    const wrapper = document.getElementById('restaurant-list');
    try {
      const restaurants = await RestaurantRepository.getAllRestaurants();

      if (!restaurants.length) throw Error('No restaurant available');

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

export default HomePage;

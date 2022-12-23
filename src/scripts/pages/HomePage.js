import Banner from '../../assets/images/banner.jpg';
import RestaurantRepository from '../repositories/RestaurantRepository';
import '../components/RestaurantCard';

class HomePage {
  static render() {
    return `
      <img class="hero-image" src="${Banner}" alt="" />
      <article class="container restaurant-section">
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
      wrapper.innerHTML = `<h3 style="text-align:center;color:red;margin-top:1rem;">${error}</h3>`;
    }
  }
}

export default HomePage;

import RestaurantService from '../services/RestaurantService';
import Logo from '../../images/heros/hero-image_1.jpg';

export default class Home {
  static render() {
    return `
      <img class="hero-image" src="${Logo}" alt="" />
      <article class="container restaurant-section">
        <h1 class="title">Explore Restaurant</h1>

        <section class="restaurant-list" id="restaurant-list">
          <load-effect></load-effect>
        </section>
      </article>
    `;
  }

  static async afterRender() {
    // handle restaurant list
    const restaurantService = new RestaurantService(
      document.getElementById('restaurant-list')
    );
    await restaurantService.renderRestaurants();
  }
}

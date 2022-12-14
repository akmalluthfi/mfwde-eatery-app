import RestaurantService from '../services/RestaurantService';

export default class Home {
  static render() {
    return `
      <section class="hero-image">
        <img src="./images/heros/hero-image_1.jpg" alt="" />
      </section>

      <section class="container restaurant-section">
        <h2>Explore Restaurant</h2>

        <div class="restaurant-list" id="restaurant-list">
          <load-effect></load-effect>
        </div>
      </section>
    `;
  }

  static async afterRender() {
    // handle restaurant list
    const restaurantService = new RestaurantService();
    await restaurantService.renderRestaurants();
  }
}

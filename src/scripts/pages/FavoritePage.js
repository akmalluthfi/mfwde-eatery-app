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

  static afterRender() {
    const wrapper = document.getElementById('restaurant-list');

    try {
      const restaurants = [];
      // const restaurants = await RestaurantRepository.getAllRestaurants();
      if (!restaurants.length) throw Error('No restaurant available');
      // wrapper.innerHTML = '';
      // restaurants.forEach((restaurant) => {
      //   const restaurantCard = document.createElement('restaurant-card');
      //   restaurantCard.setRestaurant(restaurant);
      //   wrapper.appendChild(restaurantCard);
      // });
    } catch (error) {
      wrapper.innerHTML = `<h3 style="text-align:center;color:red;margin-top:1rem;grid-column:span 3">${error}</h3>`;
    }
  }
}

export default FavoritePage;

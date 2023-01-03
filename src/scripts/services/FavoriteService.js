import FavoriteRepository from '../repositories/FavoriteRepository';

class FavoriteService {
  constructor({ btnFavContainer, restaurant }) {
    this.btnFavContainer = btnFavContainer;
    this.restaurant = restaurant;
  }

  async render() {
    if (await this.isRestaurantExists()) {
      this.removeRestaurant();
    } else {
      this.storeRestaurant();
    }
  }

  async isRestaurantExists() {
    const { id } = this.restaurant;
    const restaurant = await FavoriteRepository.find(id);
    return !!restaurant;
  }

  removeRestaurant() {
    // render like button
    this.btnFavContainer.innerHTML = `<button class="btn-fav unlike">
      <i class="fa-solid fa-heart fa-xl"></i>
    </button>`;

    this.btnFavContainer
      .querySelector('.unlike')
      .addEventListener('click', async () => {
        // remove restaurant
        const { id } = this.restaurant.id;
        await FavoriteRepository.delete(id);
        // render
        this.render();
      });
  }

  storeRestaurant() {
    // render unlike button
    this.btnFavContainer.innerHTML = `<button class="btn-fav like">
      <i class="fa-regular fa-heart fa-xl"></i>
    </button>`;

    this.btnFavContainer
      .querySelector('.like')
      .addEventListener('click', async () => {
        // store restaurant
        await FavoriteRepository.update(this.restaurant);
        // render
        this.render();
      });
  }
}

export default FavoriteService;

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
    const restaurant = await FavoriteRepository.find(this.restaurant.id);
    return !!restaurant;
  }

  removeRestaurant() {
    // render element
    this.btnFavContainer.innerHTML = ` <button class="btn-fav">
      <i class="fa-solid fa-heart fa-xl"></i>
    </button>`;

    this.btnFavContainer
      .querySelector('.btn-fav')
      .addEventListener('click', async () => {
        // remove restaurant
        await FavoriteRepository.delete(this.restaurant.id);
        // render
        this.render();
      });
  }

  storeRestaurant() {
    this.btnFavContainer.innerHTML = `<button class="btn-fav">
      <i class="fa-regular fa-heart fa-xl"></i>
    </button>`;

    this.btnFavContainer
      .querySelector('.btn-fav')
      .addEventListener('click', async () => {
        // store restaurant
        await FavoriteRepository.update(this.restaurant);
        // render
        this.render();
      });
  }
}

export default FavoriteService;

class FavoriteService {
  constructor({ btnFavContainer, restaurant }) {
    this.btnFavContainer = btnFavContainer;
    this.restaurant = restaurant;

    this.testButton = true;
  }

  render() {
    if (this.isRestaurantExists()) {
      this.removeRestaurant();
    } else {
      this.storeRestaurant();
    }
  }

  isRestaurantExists() {
    return this.testButton;
  }

  removeRestaurant() {
    // render element
    this.btnFavContainer.innerHTML = ` <button class="btn-fav">
      <i class="fa-solid fa-heart fa-xl"></i>
    </button>`;

    this.btnFavContainer
      .querySelector('.btn-fav')
      .addEventListener('click', () => {
        // remove restaurant
        this.testButton = false;
        console.log('removed');
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
      .addEventListener('click', () => {
        // store restaurant
        this.testButton = true;
        console.log('added');
        // render
        this.render();
      });
  }
}

export default FavoriteService;

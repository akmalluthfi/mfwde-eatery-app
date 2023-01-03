import FavoriteService from '../../src/scripts/services/FavoriteService';

const renderButtonContainer = () => {
  document.body.innerHTML = `<div id="btn-fav-container">
    <button class="btn-fav like">
      <i class="fa-regular fa-heart fa-xl"></i>
    </button>
  </div>`;
};

const likeButtonPresenter = async (restaurant) => {
  renderButtonContainer();

  const favoriteService = new FavoriteService({
    btnFavContainer: document.querySelector('#btn-fav-container'),
    restaurant,
  });

  await favoriteService.render();
};

export { likeButtonPresenter };

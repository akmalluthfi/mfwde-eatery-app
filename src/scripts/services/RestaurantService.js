import RestaurantRepository from '../repositories/RestaurantRepository.js';
import RouteService from './RouteService.js';
import '../components/RestaurantCard.js';
import '../components/Loader.js';
import '../components/RestaurantInfo.js';
import '../components/MenuList.js';
import '../components/Review.js';
import '../components/ReviewCard.js';

export default class RestaurantService {
  constructor(wrapper) {
    this._wrapper = wrapper;
  }

  async renderRestaurants() {
    try {
      const restaurants = await RestaurantRepository.getRestaurants();

      this._wrapper.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;
        this._wrapper.appendChild(restaurantCard);
      });
    } catch (error) {
      this.renderMessageError(error);
    }
  }

  async renderDetailRestaurant() {
    const url = RouteService.parseUrl();
    try {
      const restaurant = await RestaurantRepository.getDetailRestaurant(url.id);
      // clean wrapper
      this._wrapper.innerHTML = '';

      this.renderRestaurantMainInfo(restaurant);
      this.renderRestaurantSecondaryInfo(restaurant);
    } catch (error) {
      this.renderMessageError(error);
    }
  }

  renderRestaurantMainInfo(restaurant) {
    // create element
    const restaurantMainInfo = document.createElement('restaurant-info');
    restaurantMainInfo.restaurant = restaurant;
    // insert into dom
    this._wrapper.appendChild(restaurantMainInfo);

    // handle link button
    this.handleFavButton();

    // handle read-more
    this.handleClickReadMore();
  }

  renderRestaurantSecondaryInfo(restaurant) {
    const secondaryWrapper = document.createElement('section');
    secondaryWrapper.classList.add('restaurant-secondary-info');

    this._wrapper.appendChild(secondaryWrapper);
    this.renderMenus(secondaryWrapper, restaurant.menus);

    this.renderReview(secondaryWrapper, restaurant.customerReviews);
  }

  renderReview(secondaryWrapper, reviews) {
    // render wrapper
    const reviewWrapper = document.createElement('review-wrapper');
    secondaryWrapper.appendChild(reviewWrapper);
    // get review list
    const reviewList = reviewWrapper.querySelector('#review-list');

    if (!reviews.length) {
      reviewList.innerHTML = this.getErrorEl('There are no reviews yet');
      return;
    }

    reviews.forEach((review) => {
      const reviewCard = document.createElement('review-card');
      reviewCard.review = review;
      reviewList.appendChild(reviewCard);
    });
  }

  renderMenus(secondaryWrapper, menus) {
    for (const type in menus) {
      const menu = menus[type];
      const menuList = document.createElement('menu-list');

      if (type == 'foods') {
        menuList.setProperty('Foods', menu);
      } else if (type == 'drinks') {
        menuList.setProperty('Drinks', menu);
      } else {
        menuList.setProperty('Menu', menu);
      }

      secondaryWrapper.appendChild(menuList);
    }
  }

  handleClickReadMore() {
    document.querySelectorAll('.read-more').forEach((readMore) => {
      const content = readMore.querySelector('.content');
      const toogle = readMore.querySelector('.toogle');

      if (content.scrollHeight < 100) {
        toogle.remove();
        return;
      }

      toogle.addEventListener('click', () => {
        if (content.classList.contains('show')) {
          content.classList.remove('show');
          toogle.innerHTML = 'Show more';
        } else {
          content.classList.add('show');
          toogle.innerHTML = 'Show less';
        }
      });
    });
  }

  handleFavButton() {
    this._wrapper.querySelector('.btn-fav').addEventListener('click', () => {
      console.log('clickeds');
    });
  }

  renderMessageError(msg) {
    this._wrapper.innerHTML = `
      <h1 style="text-align:center;color:red;margin-top:1rem;">${msg}</h1>
    `;
  }

  getErrorEl(msg) {
    return `<h5 style="color:var(--muted);text-align:center">${msg}</h5>`;
  }
}

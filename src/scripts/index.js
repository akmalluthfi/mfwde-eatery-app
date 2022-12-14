import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import RestaurantService from './services/RestaurantService.js';
import NavbarService from './services/NavbarService.js';

document.addEventListener('DOMContentLoaded', function () {
  // handle year in footer
  document.getElementById('year').innerHTML = new Date().getFullYear();

  // handle navbar on small breakpoints
  new NavbarService({
    navToggle: document.getElementById('navbar-toggle'),
    navCollapse: document.querySelector('.navbar-collapse'),
    navContainer: document.querySelector('.navbar-container'),
  });

  // handle restaurant list
  const restaurantService = new RestaurantService();
  restaurantService.renderRestaurants();
});

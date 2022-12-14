import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/Loader';
import NavbarService from './services/NavbarService.js';
import AppService from './services/AppService';

const app = new AppService(document.getElementById('main-content'));

window.addEventListener('load', () => {
  // start-app
  app.render();

  // handle year in footer
  document.getElementById('year').innerHTML = new Date().getFullYear();

  // handle navbar on small breakpoints
  new NavbarService({
    navToggle: document.getElementById('navbar-toggle'),
    navCollapse: document.querySelector('.navbar-collapse'),
    navContainer: document.querySelector('.navbar-container'),
  });
});

window.addEventListener('hashchange', () => {
  app.render();
});

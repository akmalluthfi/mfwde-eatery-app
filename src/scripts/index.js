import 'regenerator-runtime';
import '../styles/main.css';
import './components/Loader';
import AppService from './services/AppService';

const app = new AppService(document.getElementById('main-content'));

window.addEventListener('load', () => {
  app.render();

  AppService.init();
});

window.addEventListener('hashchange', () => {
  app.render();
});

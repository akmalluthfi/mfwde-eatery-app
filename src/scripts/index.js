import 'regenerator-runtime';
import '../styles/main.css';
import './components/Loader';
import './components/Error';
import AppService from './services/AppService';

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new AppService(document.getElementById('main-content'));

window.addEventListener('load', () => {
  app.render();

  AppService.init();
});

window.addEventListener('hashchange', () => {
  app.render();
});

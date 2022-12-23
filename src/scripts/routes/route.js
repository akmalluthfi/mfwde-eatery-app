import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import FavoritePage from '../pages/FavoritePage';

export default {
  '/': HomePage,
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage,
};

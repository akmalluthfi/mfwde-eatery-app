import Home from './pages/Home';
import Favorite from './pages/Favorite';
import RestaurantDetail from './pages/RestaurantDetail';

export default {
  '/': Home,
  '/detail/:id': RestaurantDetail,
  '/favorite': Favorite,
};

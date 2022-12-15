import RouteService from '../services/RouteService';

export default class RestaurantDetail {
  static render() {
    return '<h1>Detail Nih boss</h1>';
  }

  static afterRender() {
    const url = RouteService.parseUrl();
    console.log(url);
  }
}

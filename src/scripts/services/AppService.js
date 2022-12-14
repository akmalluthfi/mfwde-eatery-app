import RouteService from './RouteService';
import routes from '../routes';

export default class AppService {
  constructor(content) {
    this._content = content;
  }

  async render() {
    const route = RouteService.getRoute();
    const page = routes[route];
    this._content.innerHTML = page.render();

    await page.afterRender();
  }
}

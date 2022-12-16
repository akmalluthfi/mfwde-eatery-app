import RouteService from './RouteService';
import routes from '../routes';

export default class AppService {
  constructor(content) {
    this._content = content;
  }

  async render() {
    const route = RouteService.getRoute();
    const page = routes[route];

    if (!page) {
      this._content.innerHTML = '<h1>Not Found</h1>';
      return;
    }

    this._content.innerHTML = page.render();
    await page.afterRender();
  }
}

import routes from '../routes/route';
import NotFoundPage from '../pages/NotFoundPage';

class RouteService {
  static getPages() {
    const { resource, id, verb } = this.parseUrl();

    const route =
      (resource ? `/${resource}` : '/') +
      (id ? '/:id' : '') +
      (verb ? `/${verb}` : '');

    const page = routes[route] ?? NotFoundPage;
    page.url = { resource, id, verb };

    return page;
  }

  static parseUrl() {
    const url = window.location.hash
      .slice(1)
      .toLowerCase()
      .split('/')
      .filter((urls) => urls.trim());

    return {
      resource: url[0] || null,
      id: url[1] || null,
      verb: url[2] || null,
    };
  }
}

export default RouteService;

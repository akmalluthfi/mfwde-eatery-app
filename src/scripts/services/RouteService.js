export default class RouteService {
  static getRoute() {
    const url = this.parseUrl();

    return (
      (url.resource ? `/${url.resource}` : '/') +
      (url.id ? '/:id' : '') +
      (url.verb ? `/${url.verb}` : '')
    );
  }

  static parseUrl() {
    const url = location.hash
      .slice(1)
      .toLowerCase()
      .split('/')
      .filter((url) => url.trim());

    return {
      resource: url[0] || null,
      id: url[1] || null,
      verb: url[2] || null,
    };
  }
}

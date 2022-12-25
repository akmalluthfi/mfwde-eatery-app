import RouteService from './RouteService';
import NavbarService from './NavbarService';
// import SWRegister from './SWRegisterService';

class AppService {
  constructor(mainContent) {
    this.mainContent = mainContent;
  }

  async render() {
    const page = RouteService.getPages();

    this.mainContent.innerHTML = await page.render(page.url);

    await page.afterRender(page.url);
  }

  static init() {
    // handle navbar
    const navbarService = new NavbarService({
      navToggle: document.getElementById('navbar-toggle'),
      navCollapse: document.querySelector('.navbar-collapse'),
      navContainer: document.querySelector('.navbar-container'),
    });
    navbarService.init();

    // handle footer date
    document.getElementById('year').innerHTML = new Date().getFullYear();

    // register service worker
    // SWRegister();
  }
}

export default AppService;

import RouteService from './RouteService';
import NavbarService from './NavbarService';
import hideSplashScreen from '../utils/hideSplashScreen';
import footerDateInitiator from '../utils/footerDateInitiator';

class AppService {
  constructor(mainContent) {
    this.mainContent = mainContent;
  }

  async render() {
    //   get routes
    const page = RouteService.getPages();

    this.mainContent.innerHTML = await page.render(page.url);

    await page.afterRender(page.url);
  }

  static init() {
    hideSplashScreen();

    // handle navbar
    const navbarService = new NavbarService({
      navToggle: document.getElementById('navbar-toggle'),
      navCollapse: document.querySelector('.navbar-collapse'),
      navContainer: document.querySelector('.navbar-container'),
    });
    navbarService.init();

    // handle footer date
    footerDateInitiator();
  }
}

export default AppService;

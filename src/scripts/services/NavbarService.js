class NavbarService {
  constructor({ navToggle, navCollapse, navContainer }) {
    this.navToggle = navToggle;
    this.navCollapse = navCollapse;
    this.navContainer = navContainer;
    this.navItems = navContainer.querySelectorAll('.nav-item');
  }

  init() {
    this.navToggle.addEventListener('click', (event) => {
      this.handleToggle(event);
    });

    this.navCollapse.addEventListener('click', (event) => {
      this.handleCollapse(event);
    });

    this.navItems.forEach((navItem) => {
      navItem.addEventListener('click', (event) => {
        this.handleCollapse(event);
      });
    });
  }

  handleToggle() {
    this.navCollapse.classList.add('show');
    this.navContainer.classList.add('d-contents');
  }

  handleCollapse() {
    this.navCollapse.classList.remove('show');
    this.navContainer.classList.remove('d-contents');
  }
}

export default NavbarService;

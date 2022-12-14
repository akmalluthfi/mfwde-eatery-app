export default class NavbarService {
  constructor({ navToggle, navCollapse, navContainer }) {
    this._navToggle = navToggle;
    this._navCollapse = navCollapse;
    this._navContainer = navContainer;

    this._initialListener();
  }

  _initialListener() {
    this._navToggle.addEventListener('click', (event) => {
      this._handleToggle(event);
    });

    this._navCollapse.addEventListener('click', (event) => {
      this._handleCollapse(event);
    });
  }

  _handleToggle(event) {
    this._navCollapse.classList.add('show');
    this._navContainer.classList.add('d-contents');
  }

  _handleCollapse(event) {
    this._navCollapse.classList.remove('show');
    this._navContainer.classList.remove('d-contents');
  }
}

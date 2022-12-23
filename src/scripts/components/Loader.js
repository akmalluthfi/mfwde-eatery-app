class Loader extends HTMLElement {
  connectedCallback() {
    this.classList.add('loader-container');
    this.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse fa-3x"></i>';
  }
}

customElements.define('load-effect', Loader);

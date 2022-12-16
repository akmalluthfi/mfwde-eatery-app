class Loader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="loader-container">
        <i class="fa-solid fa-spinner fa-spin-pulse fa-3x"></i>
      </div>
    `;
  }
}

customElements.define('load-effect', Loader);

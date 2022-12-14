class Loader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    `;
  }
}

customElements.define('load-effect', Loader);

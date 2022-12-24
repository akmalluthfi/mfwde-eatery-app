class Error extends HTMLElement {
  setMessage(message) {
    this.message = message;
  }

  connectedCallback() {
    this.classList.add('error');
    this.innerHTML = this.message;
  }
}

customElements.define('error-message', Error);

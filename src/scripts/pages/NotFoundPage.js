class NotFoundPage {
  static render() {
    return `
      <div class="container">
        <div class="error-page">
          <div class="error">Not Found</div>
        </div>
      </div>
    `;
  }

  static afterRender() {}
}

export default NotFoundPage;

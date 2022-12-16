class ReviewCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  /**
   * @param {object} review
   */
  set review(review) {
    this._review = review;
  }

  render() {
    this.innerHTML = `
      <article class="review-card">
        <h5 class="author">${this._review.name}</h5>
        <h6 class="date-created">${this._review.date}</h6>
        <p class="body">${this._review.review}</p>
      </article>
    `;
  }
}

customElements.define('review-card', ReviewCard);

class ReviewCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  setReview(review) {
    this.review = review;
  }

  render() {
    this.classList.add('review-card');
    this.innerHTML = `
      <h5 class="author">${this.review.name}</h5>
      <h6 class="date-created">${this.review.date}</h6>
      <p class="body">${this.review.review}</p>
    `;
  }
}

customElements.define('review-card', ReviewCard);

import './ReviewCard';

class Review extends HTMLElement {
  connectedCallback() {
    this.render();

    this.renderReviewCard();

    this.handleFormSubmit();
  }

  renderReviewCard() {
    const listReviews = this.querySelector('#review-list');

    if (this.reviews.length) {
      this.reviews.forEach((review) => {
        const reviewCard = document.createElement('review-card');
        reviewCard.setReview(review);
        listReviews.appendChild(reviewCard);
      });
    } else {
      listReviews.innerHTML =
        '<h5 style="color:var(--muted);text-align:center">There are no reviews yet</h5>';
    }
  }

  handleFormSubmit() {
    const form = this.querySelector('.form-review form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = event.target.querySelector('#name').value;
      const review = event.target.querySelector('#review').value;
      console.log(name, review);
    });
  }

  setReviews(reviews) {
    this.reviews = reviews;
  }

  render() {
    this.classList.add('reviews');
    this.innerHTML = `
      <h3 class="title">Reviews</h3>
      <section class="review-list" id="review-list"></section>

      <section class="form-review">
        <form>
          <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="review">Review</label>
            <textarea
              class="form-control"
              name="review"
              id="review"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn-add-review">Add New Review</button>
        </form>
      </section>
    `;
  }
}

customElements.define('review-section', Review);

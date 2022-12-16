class Review extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="reviews">
        <h3 class="title">Reviews</h3>
        <section class="review-list" id="review-list"></section>

        <section class="form-review">
          <form action="">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" name="name" id="name" />
            </div>
            <div class="form-group">
              <label class="form-label" for="review">Review</label>
              <textarea
                class="form-control"
                name="review"
                id="review"
              ></textarea>
            </div>

            <button class="btn-add-review">Add New Review</button>
          </form>
        </section>
      </article>
    `;
  }
}

customElements.define('review-wrapper', Review);

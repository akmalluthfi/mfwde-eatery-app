export default class Favorite {
  static render() {
    return `
      <div class="container">
        <div class="navigation-title">
          <a href="#"><i class="fa-solid fa-arrow-left fa-lg"></i></a>
          <h1>Restaurant Detail</h1>
        </div>

        <div class="restaurant-detail">
          <section class="restaurant-main-info">
            <img
              class="image"
              src="./assets/images/91bf5c4a50c73e706c25.jpg"
              alt=""
            />

            <article class="profile">
              <div class="title">
                <h2>Melting Pot</h2>
                <button class="btn-fav">
                  <i class="fa-regular fa-heart fa-xl"></i>
                </button>
              </div>
              <h6 class="rating">
                <i class="fa-solid fa-star"></i>
                4.5
                <span class="divider">&bull;</span>
                234 Reviews
              </h6>
              <h6 class="categories info">
                Categories : <span>Italia, Modern</span>
              </h6>
              <h6 class="address info">
                Address : <span>Jln. Pandeglang no 19, Medan</span>
              </h6>

              <div class="description">
                <h3>Description</h3>
                <div class="read-more">
                  <p class="content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                  </p>
                  <a class="toogle">Show more </a>
                </div>
              </div>
            </article>
          </section>

          <section class="restaurant-secondary-info">
            <article class="menus foods">
              <div class="title">
                <h3>Foods</h3>
                <div class="divider">&bull;</div>
                <h6 class="type">14 type</h6>
              </div>
              <section class="menu-list">
                <div class="menu-card">Paket rosemary</div>
                <div class="menu-card">Paket rosemary</div>
              </section>
            </article>

            <article class="menus drinks">
              <div class="title">
                <h3>Drinks</h3>
                <div class="divider">&bull;</div>
                <h6 class="type">14 type</h6>
              </div>
              <section class="menu-list">
                <div class="menu-card">Paket rosemary</div>
                <div class="menu-card">Paket rosemary</div>
              </section>
            </article>

            <article class="reviews">
              <h3 class="title">Reviews</h3>
              <section class="review-list">
                <article class="review-card">
                  <h5 class="author">Ahmad</h5>
                  <h6 class="date-created">13 November 2019</h6>
                  <p class="body">Tidak rekomendasi untuk pelajar!</p>
                </article>
                <article class="review-card">
                  <h5 class="author">Ahmad</h5>
                  <h6 class="date-created">13 November 2019</h6>
                  <p class="body">Tidak rekomendasi untuk pelajar!</p>
                </article>
                <article class="review-card">
                  <h5 class="author">Ahmad</h5>
                  <h6 class="date-created">13 November 2019</h6>
                  <p class="body">Tidak rekomendasi untuk pelajar!</p>
                </article>
              </section>

              <section class="form-review">
                <form action="">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                    />
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
          </section>
        </div>
      </div>
    `;
  }

  static afterRender() {
    console.log('favorite after mount');
  }
}

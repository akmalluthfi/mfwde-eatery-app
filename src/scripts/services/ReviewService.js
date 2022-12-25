import '../components/ReviewCard';
import '../components/Review';
import RestaurantRepository from '../repositories/RestaurantRepository';

class ReviewService {
  constructor({ wrapper, restaurant }) {
    this.wrapper = wrapper;
    this.restaurant = restaurant;
    this.reviewSection = document.createElement('review-section');
  }

  render() {
    this.reviewSection.setReviews(this.restaurant.customerReviews);
    this.wrapper.appendChild(this.reviewSection);

    // beri listener pada form
    this.reviewSection
      .querySelector('.form-review form')
      .addEventListener('submit', (event) => {
        this.storeReview(event);
      });
  }

  async storeReview(event) {
    event.preventDefault();

    const review = {
      id: this.restaurant.id,
      name: event.target.querySelector('#name').value,
      review: event.target.querySelector('#review').value,
    };

    const reviews = await RestaurantRepository.addReview(review);

    this.pushReviewCard(reviews[reviews.length - 1]);

    event.target.reset();
  }

  pushReviewCard(review) {
    const listReviews = this.reviewSection.querySelector('#review-list');
    const reviewCard = document.createElement('review-card');
    reviewCard.setReview(review);
    listReviews.appendChild(reviewCard);
  }
}

export default ReviewService;

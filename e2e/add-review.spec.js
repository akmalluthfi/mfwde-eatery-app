const assert = require('assert');

Feature('adding reviews');

Scenario('added restaurant reviews', async ({ I }) => {
  const restaurantId = 'vfsqv0t48jkfw1e867';
  const review = {
    name: 'Alfi',
    review: (Math.random() + 1).toString(36).substring(2),
  };

  I.amOnPage(`/#/detail/${restaurantId}`);

  I.seeElement('#review-list');
  let lastCountReviews = await I.grabNumberOfVisibleElements(
    '.review-card .body',
  );

  const lastReview = await I.grabTextFrom(locate('.review-card .body').last());
  assert.notStrictEqual(lastReview, review.review);

  I.seeElement('.form-review');
  within('.form-review', () => {
    I.fillField('name', review.name);
    I.fillField('review', review.review);
    I.click('Add New Review', 'button');
  });

  // eslint-disable-next-line no-plusplus
  I.waitNumberOfVisibleElements('.review-card', lastCountReviews++, 3);

  I.seeTextEquals(review.review, locate('.review-card .body').last());
});

const assert = require('assert');

Feature('liking restaurant');

Scenario('showing empty restaurant favorites', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You have no restaurant favorite yet');
});

Scenario('add favorite restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-card');

  const restaurantTitle = locate('.restaurant-card .title a');
  const titleFirstRestaurant = await I.grabTextFrom(restaurantTitle);
  I.click(restaurantTitle);
  I.seeElement('.like');
  I.click('.like');

  I.amOnPage('/#/favorite');
  I.dontSee('You have no restaurant favorite yet');
  const titleFirstFavoriteRestaurant = await I.grabTextFrom(restaurantTitle);
  assert.strictEqual(titleFirstRestaurant, titleFirstFavoriteRestaurant);
});

const assert = require('assert');

Feature('unliking restaurant');

Scenario('delete favorite restaurants', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-card');

  const titles = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 3; i++) {
    const restaurantTitles = locate('.restaurant-card .title a').at(i);
    // eslint-disable-next-line no-await-in-loop
    titles.push(await I.grabTextFrom(restaurantTitles));
    I.click(restaurantTitles);
    I.seeElement('.like');
    I.click('.like');
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.dontSee('You have no restaurant favorite yet');

  const favoriteTitles = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 3; i++) {
    const restaurantTitles = locate('.restaurant-card .title a').at(i);
    // eslint-disable-next-line no-await-in-loop
    favoriteTitles.push(await I.grabTextFrom(restaurantTitles));
  }

  assert.strictEqual(titles.toString(), favoriteTitles.toString());
});

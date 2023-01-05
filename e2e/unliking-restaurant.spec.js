Feature('unliking restaurant');

Scenario('delete favorite restaurants', async ({ I }) => {
  I.amOnPage('/');
  I.waitForVisible('.restaurant-card', 3);

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

  I.waitForVisible('.restaurant-card');
  I.click('.restaurant-card .title a');

  I.waitForVisible('.unlike');
  I.click('.unlike');

  I.amOnPage('/#/favorite');

  I.waitNumberOfVisibleElements('.restaurant-card', titles.length - 1, 3);
});

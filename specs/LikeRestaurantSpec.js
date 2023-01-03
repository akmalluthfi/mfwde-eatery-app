import { likeButtonPresenter } from './helpers/like-button-presenter';
import FavoriteRepository from '../src/scripts/repositories/FavoriteRepository';

describe('Liking a restaurant', () => {
  it('should show like button when restaurant not liked yet', () => {
    likeButtonPresenter({ id: 1 });
    expect(document.querySelector('.like')).toBeTruthy();
  });

  it('should not show unlike button when restaurant not liked yet', () => {
    likeButtonPresenter({ id: 1 });
    expect(document.querySelector('.unlike')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    const id = 1;

    await likeButtonPresenter({ id });
    document.querySelector('.like').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRepository.find(id);
    expect(restaurant).toEqual({ id });

    FavoriteRepository.delete(id);
  });

  it('should not add restaurant when there is no id', async () => {
    await likeButtonPresenter({});
    document.querySelector('.like').dispatchEvent(new Event('click'));

    const restaurants = await FavoriteRepository.all();

    expect(restaurants).toEqual([]);
  });
});

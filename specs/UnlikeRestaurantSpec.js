import { likeButtonPresenter } from './helpers/like-button-presenter';
import FavoriteRepository from '../src/scripts/repositories/FavoriteRepository';

describe('Unliking a restaurant', () => {
  beforeEach(async () => {
    await FavoriteRepository.update({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRepository.delete(1);
  });

  it('should show a unlike button when the restaurant has not been liked', async () => {
    await likeButtonPresenter({ id: 1 });

    expect(document.querySelector('.unlike')).toBeTruthy();
  });

  it('should not display the like button when the restaurant has not been liked', async () => {
    await likeButtonPresenter({ id: 1 });

    expect(document.querySelector('.like')).toBeFalsy();
  });

  it('should be able to remove the restaurant from favorites', async () => {
    await likeButtonPresenter({ id: 1 });

    document.querySelector('.unlike').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRepository.all();

    expect(restaurants).toEqual([]);
  });
});

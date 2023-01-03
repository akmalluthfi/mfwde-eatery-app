import { openDB } from 'idb';
import { DB_NAME, DB_VERSION } from '../config/app';

const OBJECT_NAME = 'favorite_movies';

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_NAME, { keyPath: 'id' });
  },
});

class FavoriteRepository {
  static async all() {
    return (await dbPromise).getAll(OBJECT_NAME);
  }

  static async find(id) {
    if (!id) return false;
    return (await dbPromise).get(OBJECT_NAME, id);
  }

  static async update(restaurant) {
    if (!restaurant.id) return false;

    return (await dbPromise).put(OBJECT_NAME, restaurant);
  }

  static async delete(id) {
    return (await dbPromise).delete(OBJECT_NAME, id);
  }
}

export default FavoriteRepository;

export default class Favorite {
  static render() {
    return `<h1>Halaman Favorite</h1>`;
  }

  static afterRender() {
    console.log('favorite after mount');
  }
}

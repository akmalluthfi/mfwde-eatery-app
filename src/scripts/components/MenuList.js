class MenuList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  setProperty(title, menus) {
    this._title = title;
    this._menus = menus;
  }

  render() {
    this.innerHTML = `
      <article class="menus ${this._title.toLowerCase()}">
        <div class="title">
          <h3>${this._title}</h3>
          <div class="divider">&bull;</div>
          <h6 class="type">${this._menus.length} type</h6>
        </div>
        <section class="menu-list">
        ${
          this._menus.length
            ? this.generateMenuList()
            : this.generateErrorMsg(`There are no ${this._title} yet`)
        }
        </section>
      </article>
    `;
  }

  generateMenuList() {
    return this._menus
      .map((menu) => `<div class="menu-card">${menu.name}</div>`)
      .join('');
  }

  generateErrorMsg(msg = 'Error') {
    return `<h5 style="color:var(--muted);text-align:center">${msg}</h5>`;
  }
}

customElements.define('menu-list', MenuList);

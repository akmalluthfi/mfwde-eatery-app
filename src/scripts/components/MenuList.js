class MenuList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  setMenus(name, menus) {
    this.name = name;
    this.menus = menus;
  }

  render() {
    const result = this.menus.length
      ? this.generateMenuList()
      : this.generateErrorMsg();

    this.classList.add('menus', this.name.toLowerCase());
    this.innerHTML = `
      <div class="title">
        <h3>${this.name}</h3>
        <div class="divider">&bull;</div>
        <h6 class="type">${this.menus.length} type</h6>
      </div>
      <section class="menu-list">${result}</section>
    `;
  }

  generateMenuList() {
    return this.menus
      .map((menu) => `<div class="menu-card">${menu.name}</div>`)
      .join('');
  }

  generateErrorMsg() {
    return `<h5 style="color:var(--muted);text-align:center">There are no ${this.name} yet</h5>`;
  }
}

customElements.define('menu-list', MenuList);

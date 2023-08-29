export default class Section {
  constructor({ items, renderer }, selector) {
    this._initialArray = items;
    this._container = selector
    this._renderer = renderer
  }

  renderer() {
    this._initialArray.forEach(item => {
      this._renderer(item)

    });
  }

  addItem(element) {
    this._container.append(element)
  }

  addItemPrep(element) {
    this._container.prepend(element);
  }
}


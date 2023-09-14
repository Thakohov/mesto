export default class Section {
  constructor({ renderer }, selector) {
    this._container = selector
    this._renderer = renderer
  }

  renderer(data) {
    data.forEach(item => {
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


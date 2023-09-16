export default class Section {
  constructor({ renderItems }, selector) {
    this._container = selector;
    this._renderItems = renderItems;
  }

  renderItems(data) {
    data.forEach((item) => {
      this._renderItems(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }

  addItemPrep(element) {
    this._container.prepend(element);
  }
}

export class Cart {
  constructor(id, title, price, img, count) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.img = img;
    this.count = count;
  }

  decreaseCount() {
    this.count--;
  }

  increaseCount() {
    this.count++;
  }
}

function identity<T>(x: T): T {
  return x;
}
let y: number = identity<number>(1);
class Queue<T> {
  data = [];
  add(item: T) {
    this.data.push(item);
  }
}

class Product {
  constructor(title: string) {}
}

let products = new Queue<Product>();
products.add(new Product("aa"));

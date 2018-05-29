"use strict";
function identity(x) {
    return x;
}
var y = identity(1);
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    return Queue;
}());
var Product = /** @class */ (function () {
    function Product(title) {
    }
    return Product;
}());
var products = new Queue();
products.add(new Product("aa"));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ComponentProduct = /** @class */ (function () {
    function ComponentProduct() {
    }
    ComponentProduct.prototype.add = function (product) { };
    ComponentProduct.prototype.remove = function (product) { };
    return ComponentProduct;
}());
var LeafProduct = /** @class */ (function (_super) {
    __extends(LeafProduct, _super);
    function LeafProduct(name, price) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.price = price;
        return _this;
    }
    LeafProduct.prototype.getPrice = function () {
        return this.price;
    };
    return LeafProduct;
}(ComponentProduct));
var CompositeProduct = /** @class */ (function (_super) {
    __extends(CompositeProduct, _super);
    function CompositeProduct(products) {
        var _this = _super.call(this) || this;
        _this.products = products;
        return _this;
    }
    CompositeProduct.prototype.add = function (product) {
        this.products.push(product);
    };
    CompositeProduct.prototype.remove = function (product) {
        this.products.push(product);
    };
    CompositeProduct.prototype.getPrice = function () {
        return this.products.reduce(function (sum, component) {
            return sum += component.getPrice();
        }, 0);
    };
    return CompositeProduct;
}(ComponentProduct));
var laptop = new LeafProduct('Notebook', 10000);
var charger = new LeafProduct('Carregador', 99);
var sueters = new LeafProduct('Sueters', 299);
var chickenBreasts = new LeafProduct('Peito de Frango', 14);
var box1 = new CompositeProduct([laptop, charger]);
console.log(box1.getPrice());
box1.add(sueters);
box1.add(chickenBreasts);
console.log(box1.getPrice());
var coffeMachine = new LeafProduct('Cafeteira', 100);
var medicines = new LeafProduct('Remedios', 200);
var box2 = new CompositeProduct([coffeMachine, medicines]);
console.log(box2.getPrice());
box1.add(box2);
console.log(box1.getPrice());

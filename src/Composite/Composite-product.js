"use strict";
class ComponentProduct {
    add(product) { }
    remove(product) { }
}
class LeafProduct extends ComponentProduct {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
class CompositeProduct extends ComponentProduct {
    constructor(products) {
        super();
        this.products = products;
    }
    add(product) {
        this.products.push(product);
    }
    remove(product) {
        this.products.push(product);
    }
    getPrice() {
        return this.products.reduce((sum, component) => {
            return sum += component.getPrice();
        }, 0);
    }
}
const laptop = new LeafProduct('Notebook', 10000);
const charger = new LeafProduct('Carregador', 99);
const sueters = new LeafProduct('Sueters', 299);
const chickenBreasts = new LeafProduct('Peito de Frango', 14);
const box1 = new CompositeProduct([laptop, charger]);
console.log(box1.getPrice());
box1.add(sueters);
box1.add(chickenBreasts);
console.log(box1.getPrice());
const coffeMachine = new LeafProduct('Cafeteira', 100);
const medicines = new LeafProduct('Remedios', 200);
const box2 = new CompositeProduct([coffeMachine, medicines]);
console.log(box2.getPrice());
box1.add(box2);
console.log(box1.getPrice());

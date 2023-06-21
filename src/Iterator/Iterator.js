"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class MyDefaultIterator {
    constructor(dataStructure) {
        this.dataStructure = dataStructure;
        this.index = 0;
    }
    next() {
        const items = this.dataStructure.getItems();
        const returnValue = this.makeValue(items[this.index]);
        returnValue.done = this.index >= this.dataStructure.size();
        this.index += 1;
        return returnValue;
    }
    reset() {
        this.index = 0;
    }
    makeValue(value) {
        return {
            value,
            done: false
        };
    }
}
class MyReverseIterator {
    constructor(dataStructure) {
        this.dataStructure = dataStructure;
        this.index = this.dataStructure.size() - 1;
    }
    next() {
        const items = this.dataStructure.getItems();
        const returnValue = this.makeValue(items[this.index]);
        returnValue.done = this.index < 0;
        this.index -= 1;
        return returnValue;
    }
    reset() {
        this.index = this.dataStructure.size() - 1;
    }
    makeValue(value) {
        return {
            value,
            done: false
        };
    }
}
class MyDataStructure {
    constructor() {
        this.collection = [];
        this.iterator = new MyDefaultIterator(this);
    }
    addItems(...items) {
        items.forEach(item => this.collection.push(item));
    }
    getItems() {
        return this.collection;
    }
    size() {
        return this.collection.length;
    }
    changeIterator(iterator) {
        this.iterator = iterator;
    }
    [Symbol.iterator]() {
        this.iterator.reset();
        return this.iterator;
    }
}
const main = () => {
    const dataStructure = new MyDataStructure();
    dataStructure.addItems('A', 'B', 'C', 'D', 'E');
    const [a, b] = dataStructure;
    console.log(a, b);
    console.log('###');
    for (const data of dataStructure) {
        console.log(data);
    }
    console.log('###');
    dataStructure.changeIterator(new MyReverseIterator(dataStructure));
    for (const data of dataStructure) {
        console.log(data);
    }
};
exports.main = main;
(0, exports.main)();

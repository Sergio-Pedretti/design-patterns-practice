"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyMeat {
    constructor() {
        this.flavor = '';
        this.weight = '';
        this.cost = 1;
    }
    clone() {
        return JSON.parse(JSON.stringify(this));
    }
}
class Angus extends MyMeat {
    constructor() {
        super(...arguments);
        this.flavor = 'great';
        this.cost = 59;
        this.weight = '1kg';
    }
    clone() {
        return JSON.parse(JSON.stringify(this));
    }
}
const myAngus = new Angus();
console.log(myAngus.cost, myAngus.flavor, myAngus.weight);
const copyAngus = myAngus.clone();
copyAngus.cost = 10;
console.log(myAngus.cost, copyAngus.cost);

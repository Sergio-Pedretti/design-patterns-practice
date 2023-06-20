"use strict";
class Tshirt {
    constructor() {
        this.name = 'Camisa';
    }
    getName() {
        return this.name;
    }
}
class OutfitDecorator {
    constructor(outfit) {
        this.outfit = outfit;
        this.name = 'Decorator';
    }
    getName() {
        return this.outfit.getName();
    }
}
class Coat extends OutfitDecorator {
    getName() {
        return this.outfit.getName() + ' com casaco';
    }
}
const tshirt = new Tshirt();
const tshirtWithCoat = new Coat(tshirt);
console.log(tshirt.getName());
console.log(tshirtWithCoat.getName());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Walking {
    execute() {
        console.log('I\'ll go walking, it is free but I will get there in 3 hours');
    }
}
class Bus {
    execute() {
        console.log('I\'ll go by bus, it cost 4 reais but I will get there in 40 minutes');
    }
}
class Uber {
    execute() {
        console.log('I\'ll take an Uber, it cost 12 reais but I will get there in 10 minutes');
    }
}
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    execute() {
        this.strategy.execute();
    }
}
const main = () => {
    const walking = new Walking();
    const bus = new Bus();
    const uber = new Uber();
    const context = new Context(walking);
    context.execute();
    context.setStrategy(bus);
    context.execute();
    context.setStrategy(uber);
    context.execute();
};
exports.main = main;
(0, exports.main)();

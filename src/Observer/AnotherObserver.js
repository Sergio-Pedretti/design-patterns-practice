"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class ConcreteSubscriber {
    update(publisher) {
        console.log("ConcreteSubscriber: Reagindo.");
    }
}
class ConcretePublisher {
    constructor() {
        this.currentSubscriber = [];
    }
    subscribe(subscriber) {
        this.currentSubscriber.push(subscriber);
    }
    unsubscribe(subscriber) {
        const index = this.currentSubscriber.indexOf(subscriber);
        this.currentSubscriber.splice(index, 1);
    }
    notify() {
        for (const sub of this.currentSubscriber) {
            sub.update(this);
        }
    }
}
const main = () => {
    const publisher = new ConcretePublisher();
    const subscriber = new ConcreteSubscriber();
    publisher.subscribe(subscriber);
    publisher.notify();
};
exports.main = main;
(0, exports.main)();

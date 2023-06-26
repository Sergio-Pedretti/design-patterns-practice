"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class ConcreteVisitor {
    visitA(e) {
        e.featureA();
    }
    visitB(e) {
        e.featureB();
    }
}
class ElementA {
    accept(visitor) {
        visitor.visitA(this);
    }
    featureA() {
        console.log('Feature A is running...');
    }
}
class ElementB {
    accept(visitor) {
        visitor.visitB(this);
    }
    featureB() {
        console.log('Feature B is running...');
    }
}
const main = () => {
    const element = new ElementA();
    const secondElement = new ElementB();
    const visitor = new ConcreteVisitor();
    element.accept(visitor);
    secondElement.accept(visitor);
};
exports.main = main;
(0, exports.main)();

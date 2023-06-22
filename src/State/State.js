"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Context {
    constructor(initialState) {
        this.state = initialState;
        initialState.setContext(this);
    }
    changeState(state) {
        this.state = state;
    }
    doThis() {
        this.state.doThis();
    }
    doThat() {
        this.state.doThat();
    }
}
class ConcreteStateA {
    constructor() {
        this.context = null;
    }
    setContext(context) {
        this.context = context;
    }
    doThis() {
        console.log('ConcreteStateA doing this');
    }
    doThat() {
        console.log('ConcreteStateA doing that');
        if (this.context === null)
            return;
        const otherState = new ConcreteStateB();
        this.context.changeState(otherState);
    }
}
class ConcreteStateB {
    constructor() {
        this.context = null;
    }
    setContext(context) {
        this.context = context;
    }
    doThis() {
        console.log('ConcreteStateB doing this');
    }
    doThat() {
        console.log('ConcreteStateB doing that');
    }
}
const main = () => {
    const myState = new ConcreteStateA();
    const context = new Context(myState);
    context.doThis();
    context.doThat();
    context.doThis();
    context.doThat();
};
exports.main = main;
(0, exports.main)();

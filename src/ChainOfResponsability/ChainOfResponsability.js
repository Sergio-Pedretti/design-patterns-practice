"use strict";
class FirstStep {
    constructor() {
        this.next = null;
    }
    setNext(request) {
        this.next = request;
    }
    handler(request) {
        console.log('Primeiro passo');
        if (this.next !== null) {
            this.next.handler(request);
        }
    }
}
class SecondStep {
    constructor() {
        this.next = null;
    }
    setNext(request) {
        this.next = request;
    }
    handler(request) {
        console.log('Segundo passo');
        if (this.next !== null) {
            this.next.handler(request);
        }
    }
}
const sourceCode = () => {
    const c1 = new FirstStep();
    const c2 = new SecondStep();
    c1.setNext(c2);
    c1.handler('OK');
};
sourceCode();

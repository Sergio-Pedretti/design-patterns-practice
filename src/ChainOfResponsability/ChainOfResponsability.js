var FirstStep = /** @class */ (function () {
    function FirstStep() {
        this.next = null;
    }
    FirstStep.prototype.setNext = function (request) {
        this.next = request;
    };
    FirstStep.prototype.handler = function (request) {
        console.log('Primeiro passo');
        if (this.next !== null) {
            this.next.handler(request);
        }
    };
    return FirstStep;
}());
var SecondStep = /** @class */ (function () {
    function SecondStep() {
        this.next = null;
    }
    SecondStep.prototype.setNext = function (request) {
        this.next = request;
    };
    SecondStep.prototype.handler = function (request) {
        console.log('Segundo passo');
        if (this.next !== null) {
            this.next.handler(request);
        }
    };
    return SecondStep;
}());
var sourceCode = function () {
    var c1 = new FirstStep();
    var c2 = new SecondStep();
    c1.setNext(c2);
    c1.handler('OK');
};
sourceCode();

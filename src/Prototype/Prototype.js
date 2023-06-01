"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var MyMeat = /** @class */ (function () {
    function MyMeat() {
        this.flavor = '';
        this.weight = '';
        this.cost = 1;
    }
    MyMeat.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return MyMeat;
}());
var Angus = /** @class */ (function (_super) {
    __extends(Angus, _super);
    function Angus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flavor = 'great';
        _this.cost = 59;
        _this.weight = '1kg';
        return _this;
    }
    Angus.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return Angus;
}(MyMeat));
var myAngus = new Angus();
console.log(myAngus.cost, myAngus.flavor, myAngus.weight);
var copyAngus = myAngus.clone();
copyAngus.cost = 10;
console.log(myAngus.cost, copyAngus.cost);

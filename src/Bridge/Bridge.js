"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(thing) {
        this.thing = thing;
    }
    Shape.prototype.createShape = function (shape) {
        this.thing.setShape(shape);
        console.log("The shape is a: ".concat(this.thing.getShape()));
    };
    Shape.prototype.changeColor = function (color) {
        this.thing.setColor(color);
        console.log("".concat(this.thing.getShape(), " has now this color: ").concat(this.thing.getColor()));
    };
    Shape.prototype.removeShape = function () {
        this.thing.setShape('removed');
        console.log("The shape is a: ".concat(this.thing.getShape()));
    };
    Shape.prototype.volume = function () {
        console.log(this.thing.getVoice());
    };
    Shape.prototype.louder = function () {
        this.thing.speakLouder();
    };
    Shape.prototype.softly = function () {
        this.thing.speakSoftly();
    };
    return Shape;
}());
exports.Shape = Shape;
var AdvancedShape = /** @class */ (function (_super) {
    __extends(AdvancedShape, _super);
    function AdvancedShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedShape.prototype.yenYang = function () {
        this.thing.setColor('black and white with white and black dots');
    };
    return AdvancedShape;
}(Shape));
var Triangle = /** @class */ (function () {
    function Triangle() {
        this.color = 'black';
        this.shape = 'triangle';
        this.speak = 50;
    }
    Triangle.prototype.getShape = function () {
        return this.shape;
    };
    Triangle.prototype.setShape = function () {
        this.shape = 'triangle';
    };
    Triangle.prototype.getColor = function () {
        return this.color;
    };
    Triangle.prototype.setColor = function (color) {
        this.color = color;
    };
    Triangle.prototype.speakLouder = function () {
        this.speak = this.speak + 10;
    };
    Triangle.prototype.speakSoftly = function () {
        this.speak = this.speak - 10;
    };
    Triangle.prototype.getVoice = function () {
        return this.speak;
    };
    return Triangle;
}());
var triangle = new Triangle();
var shape = new Shape(triangle);
shape.changeColor('blue');
shape.volume();
shape.softly();
shape.volume();
shape.softly();
shape.volume();
shape.softly();
shape.volume();
shape.louder();
shape.volume();
shape.louder();
shape.volume();

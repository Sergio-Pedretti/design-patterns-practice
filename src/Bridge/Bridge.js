"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(thing) {
        this.thing = thing;
    }
    createShape(shape) {
        this.thing.setShape(shape);
        console.log(`The shape is a: ${this.thing.getShape()}`);
    }
    changeColor(color) {
        this.thing.setColor(color);
        console.log(`${this.thing.getShape()} has now this color: ${this.thing.getColor()}`);
    }
    removeShape() {
        this.thing.setShape('removed');
        console.log(`The shape is a: ${this.thing.getShape()}`);
    }
    volume() {
        console.log(this.thing.getVoice());
    }
    louder() {
        this.thing.speakLouder();
    }
    softly() {
        this.thing.speakSoftly();
    }
}
exports.Shape = Shape;
class AdvancedShape extends Shape {
    yenYang() {
        this.thing.setColor('black and white with white and black dots');
    }
}
class Triangle {
    constructor() {
        this.color = 'black';
        this.shape = 'triangle';
        this.speak = 50;
    }
    getShape() {
        return this.shape;
    }
    setShape() {
        this.shape = 'triangle';
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    speakLouder() {
        this.speak = this.speak + 10;
    }
    speakSoftly() {
        this.speak = this.speak - 10;
    }
    getVoice() {
        return this.speak;
    }
}
const triangle = new Triangle();
const shape = new Shape(triangle);
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

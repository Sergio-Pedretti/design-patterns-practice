"use strict";
class Dot {
    constructor(x, y) {
        this.id = Math.floor(Math.random() * 10000);
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
    draw() {
        console.log('DRAW DOT');
    }
}
class Compound {
    constructor() {
        this.id = Math.floor(Math.random() * 10000);
        this.children = [];
    }
    add(child) {
        this.children.push(child);
    }
    remove(child) {
        this.children = this.children.filter(el => el.id !== child.id);
    }
    move(x, y) {
        for (const child of this.children) {
            child.move(x, y);
        }
    }
    draw() {
        for (const child of this.children) {
            child.draw();
        }
    }
}
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    draw() {
        console.log('DRAW CIRCLE');
    }
}
class ImageEditor {
    constructor() {
        this.all = new Compound();
    }
    load() {
        this.all = new Compound();
        const dot = new Dot(5, 5);
        const circle = new Circle(10, 10, 8);
        this.all.add(dot);
        this.all.add(circle);
    }
    groupSelected(components) {
        const group = new Compound();
        for (const component of components) {
            group.add(component);
            this.all.remove(component);
        }
        this.all.add(group);
        this.all.draw();
    }
}
const client = new ImageEditor();
client.load();
const dot = new Dot(1, 1);
const circle = new Circle(3, 3, 5);
client.groupSelected([]);
console.log('-----------');
client.groupSelected([dot, circle]);
console.log('-----------');
client.load();
client.groupSelected([dot, circle]);
client.groupSelected([dot, circle]);

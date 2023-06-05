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
var Dot = /** @class */ (function () {
    function Dot(x, y) {
        this.id = Math.floor(Math.random() * 10000);
        this.x = x;
        this.y = y;
    }
    Dot.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Dot.prototype.draw = function () {
        console.log('DRAW DOT');
    };
    return Dot;
}());
var Compound = /** @class */ (function () {
    function Compound() {
        this.id = Math.floor(Math.random() * 10000);
        this.children = [];
    }
    Compound.prototype.add = function (child) {
        this.children.push(child);
    };
    Compound.prototype.remove = function (child) {
        this.children = this.children.filter(function (el) { return el.id !== child.id; });
    };
    Compound.prototype.move = function (x, y) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.move(x, y);
        }
    };
    Compound.prototype.draw = function () {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.draw();
        }
    };
    return Compound;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        console.log('DRAW CIRCLE');
    };
    return Circle;
}(Dot));
var ImageEditor = /** @class */ (function () {
    function ImageEditor() {
        this.all = new Compound();
    }
    ImageEditor.prototype.load = function () {
        this.all = new Compound();
        var dot = new Dot(5, 5);
        var circle = new Circle(10, 10, 8);
        this.all.add(dot);
        this.all.add(circle);
    };
    ImageEditor.prototype.groupSelected = function (components) {
        var group = new Compound();
        for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
            var component = components_1[_i];
            group.add(component);
            this.all.remove(component);
        }
        this.all.add(group);
        this.all.draw();
    };
    return ImageEditor;
}());
var client = new ImageEditor();
client.load();
var dot = new Dot(1, 1);
var circle = new Circle(3, 3, 5);
client.groupSelected([]);
console.log('-----------');
client.groupSelected([dot, circle]);
console.log('-----------');
client.load();
client.groupSelected([dot, circle]);
client.groupSelected([dot, circle]);

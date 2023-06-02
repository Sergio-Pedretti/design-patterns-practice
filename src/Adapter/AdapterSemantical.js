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
var RoundPin = /** @class */ (function () {
    function RoundPin(radius) {
        this.radius = radius;
    }
    return RoundPin;
}());
var RoundHole = /** @class */ (function () {
    function RoundHole(radius) {
        this.radius = radius;
    }
    RoundHole.prototype.fit = function (radius) {
        console.log('Only fits if it\'s a round pin');
        if (radius <= this.radius) {
            console.log('It Fits');
            return;
        }
        console.log('Get Another, does not fit');
    };
    return RoundHole;
}());
var SquarePin = /** @class */ (function () {
    function SquarePin(height, width) {
        this.format = {
            height: 0,
            width: 0
        };
        this.format.height = height;
        this.format.width = width;
    }
    return SquarePin;
}());
var AdapterSquarePinToRound = /** @class */ (function (_super) {
    __extends(AdapterSquarePinToRound, _super);
    function AdapterSquarePinToRound(square) {
        var _this = _super.call(this, square.format.height) || this;
        _this.square = square;
        var sum = (square.format.height * square.format.height) + (square.format.width * square.format.width);
        _this.radius = Math.sqrt(sum);
        return _this;
    }
    return AdapterSquarePinToRound;
}(RoundPin));
var pin = new RoundPin(8);
var square = new SquarePin(4, 4);
var adaptedSquare = new AdapterSquarePinToRound(square);
var hole = new RoundHole(16);
hole.fit(pin.radius);
//Not assignable because it has different expected interfaces
//hole.fit(square.format)
hole.fit(adaptedSquare.radius);
var square2 = new SquarePin(20, 20);
var adaptedSquare2 = new AdapterSquarePinToRound(square2);
hole.fit(adaptedSquare2.radius);

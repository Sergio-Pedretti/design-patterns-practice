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
var Tshirt = /** @class */ (function () {
    function Tshirt() {
        this.name = 'Camisa';
    }
    Tshirt.prototype.getName = function () {
        return this.name;
    };
    return Tshirt;
}());
var OutfitDecorator = /** @class */ (function () {
    function OutfitDecorator(outfit) {
        this.outfit = outfit;
        this.name = 'Decorator';
    }
    OutfitDecorator.prototype.getName = function () {
        return this.outfit.getName();
    };
    return OutfitDecorator;
}());
var Coat = /** @class */ (function (_super) {
    __extends(Coat, _super);
    function Coat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coat.prototype.getName = function () {
        return this.outfit.getName() + ' com casaco';
    };
    return Coat;
}(OutfitDecorator));
var tshirt = new Tshirt();
var tshirtWithCoat = new Coat(tshirt);
console.log(tshirt.getName());
console.log(tshirtWithCoat.getName());

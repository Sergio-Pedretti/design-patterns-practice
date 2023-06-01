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
var MinhaLingua = /** @class */ (function () {
    function MinhaLingua() {
    }
    MinhaLingua.prototype.Portugues = function () {
        return "Eu só Falo Pt-BR";
    };
    return MinhaLingua;
}());
var ExternaIngles = /** @class */ (function () {
    function ExternaIngles() {
    }
    ExternaIngles.prototype.Ingles = function () {
        return "I am Speaking in English!";
    };
    return ExternaIngles;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptador) {
        var _this = _super.call(this) || this;
        _this.adaptador = adaptador;
        return _this;
    }
    Adapter.prototype.Portugues = function () {
        var translate = this.adaptador.Ingles();
        return "(" + translate + ") -> Eu estou falando em Ingl\u00EAs";
    };
    return Adapter;
}(MinhaLingua));
function clientCode(target) {
    console.log(target.Portugues());
}
var minhaLingua = new MinhaLingua();
clientCode(minhaLingua);
console.log("");
var externaIngles = new ExternaIngles();
console.log(externaIngles.Ingles());
console.log("");
var adaptador = new Adapter(externaIngles);
clientCode(adaptador);

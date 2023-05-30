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
var Criador = /** @class */ (function () {
    function Criador() {
    }
    Criador.prototype.algumaOperacao = function () {
        var produto = this.criarProduto();
        produto.funcionar();
    };
    return Criador;
}());
var CriadorConcretoA = /** @class */ (function (_super) {
    __extends(CriadorConcretoA, _super);
    function CriadorConcretoA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CriadorConcretoA.prototype.criarProduto = function () {
        return new ProdutoConcretoA();
    };
    return CriadorConcretoA;
}(Criador));
var CriadorConcretoB = /** @class */ (function (_super) {
    __extends(CriadorConcretoB, _super);
    function CriadorConcretoB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CriadorConcretoB.prototype.criarProduto = function () {
        return new ProdutoConcretoB();
    };
    return CriadorConcretoB;
}(Criador));
var ProdutoConcretoA = /** @class */ (function () {
    function ProdutoConcretoA() {
    }
    ProdutoConcretoA.prototype.funcionar = function () {
        console.log('Produto A Funciona aqui');
    };
    return ProdutoConcretoA;
}());
var ProdutoConcretoB = /** @class */ (function () {
    function ProdutoConcretoB() {
    }
    ProdutoConcretoB.prototype.funcionar = function () {
        console.log('Produto B Funciona aqui');
    };
    return ProdutoConcretoB;
}());
var CHOICE = 'B';
var produto;
function iniciar() {
    if (CHOICE === 'A') {
        produto = new ProdutoConcretoA();
    }
    else if (CHOICE === 'B') {
        produto = new ProdutoConcretoB();
    }
    else {
        throw Error();
    }
}
function main() {
    iniciar();
    produto.funcionar();
}
main();
// class Fabrica {
//     CHOICE = 'B'
//     produto: Produto
//     iniciar () {
//         if(this.CHOICE === 'A'){
//             this.produto = new ProdutoConcretoA()
//         }
//         else if(this.CHOICE === 'B'){
//             this.produto = new ProdutoConcretoB()
//         }
//         else{
//             throw Error()
//         }
//     }
//     main () {
//         this.iniciar()
//         this.produto.funcionar()
//     }
// }
// const start = new Fabrica()
// start.main()

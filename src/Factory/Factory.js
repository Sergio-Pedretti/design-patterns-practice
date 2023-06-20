"use strict";
class Criador {
    algumaOperacao() {
        const produto = this.criarProduto();
        produto.funcionar();
    }
}
class CriadorConcretoA extends Criador {
    criarProduto() {
        return new ProdutoConcretoA();
    }
}
class CriadorConcretoB extends Criador {
    criarProduto() {
        return new ProdutoConcretoB();
    }
}
class ProdutoConcretoA {
    funcionar() {
        console.log('Produto A Funciona aqui');
    }
}
class ProdutoConcretoB {
    funcionar() {
        console.log('Produto B Funciona aqui');
    }
}
// Abordagem funcional
const CHOICE = 'B';
let produto;
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
//     CHOICE = 'A'
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

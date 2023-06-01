interface Produto {
    funcionar: () => void 
}

abstract class Criador {
    algumaOperacao() {
        const produto = this.criarProduto()
        produto.funcionar()
    }

    abstract criarProduto(): Produto
}

class CriadorConcretoA extends Criador {
    criarProduto(): Produto {
        return new ProdutoConcretoA()
    }
}

class CriadorConcretoB extends Criador {
    criarProduto(): Produto {
        return new ProdutoConcretoB()
    }
}

class ProdutoConcretoA implements Produto {
    funcionar() {
        console.log('Produto A Funciona aqui')
    }
}

class ProdutoConcretoB implements Produto {
    funcionar() {
        console.log('Produto B Funciona aqui')
    }
}

// Abordagem funcional
const CHOICE:string = 'B'
let produto: Produto

function iniciar () {
    if(CHOICE === 'A'){
        produto = new ProdutoConcretoA()
    }
    else if(CHOICE === 'B'){
        produto = new ProdutoConcretoB()
    }
    else{
        throw Error()
    }
}

function main () {
    iniciar()
    produto.funcionar()
}

main()

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


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientCode = void 0;
class MinhaLingua {
    Portugues() {
        return "Eu só Falo Pt-BR";
    }
}
class ExternaIngles {
    Ingles() {
        return "I am Speaking in English!";
    }
}
class Adapter extends MinhaLingua {
    constructor(adaptador) {
        super();
        this.adaptador = adaptador;
    }
    Portugues() {
        const translate = this.adaptador.Ingles();
        return `(${translate}) -> Eu estou falando em Inglês`;
    }
}
function clientCode(target) {
    console.log(target.Portugues());
}
exports.clientCode = clientCode;
const minhaLingua = new MinhaLingua();
clientCode(minhaLingua);
console.log("");
const externaIngles = new ExternaIngles();
console.log(externaIngles.Ingles());
console.log("");
const adaptador = new Adapter(externaIngles);
clientCode(adaptador);

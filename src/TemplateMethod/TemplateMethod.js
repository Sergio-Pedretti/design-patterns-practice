"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class Template {
    constructor() {
        this.templateMetod = () => {
            this.step1();
            this.step2();
            this.step3();
            this.step4();
        };
    }
    step3() {
        console.log('Formatando Dados');
    }
    step4() {
        console.log('Exibindo Dados');
    }
}
class PDF extends Template {
    step1() {
        console.log('Parseando Documento PDF');
    }
    step2() {
        console.log('Extraindo Dados do PDF');
    }
}
class Excel extends Template {
    step1() {
        console.log('Parseando Documento Excel');
    }
    step2() {
        console.log('Extraindo Dados do Excel');
    }
}
const main = () => {
    const pdf = new PDF();
    pdf.templateMetod();
    const excel = new Excel();
    excel.templateMetod();
};
exports.main = main;
(0, exports.main)();

var Builder = /** @class */ (function () {
    function Builder(incluidas) {
        if (incluidas === void 0) { incluidas = []; }
        this.incluidas = incluidas;
    }
    Builder.of = function () {
        return new Builder();
    };
    Builder.prototype.fase1 = function () {
        console.log('Fase 1 incluida');
        this.incluidas.push('Fase 1');
        return this;
    };
    Builder.prototype.fase2 = function () {
        console.log('Fase 2 incluida');
        this.incluidas.push('Fase 2');
        return this;
    };
    Builder.prototype.fase3 = function () {
        console.log('Fase 3 incluida');
        this.incluidas.push('Fase 3');
        return this;
    };
    Builder.prototype.fase4 = function () {
        console.log('Fase 4 incluida');
        this.incluidas.push('Fase 4');
        return this;
    };
    Builder.prototype.fase5 = function () {
        console.log('Fase 5 incluida');
        this.incluidas.push('Fase 5');
        return this;
    };
    Builder.prototype.build = function () {
        return this.incluidas;
    };
    return Builder;
}());
var builder = Builder.of().fase1().fase2().fase3().fase4().fase5().build();
console.log(builder);

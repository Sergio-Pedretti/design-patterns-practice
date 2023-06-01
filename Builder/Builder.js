var GenericBuilder = /** @class */ (function () {
    function GenericBuilder(incluidas) {
        if (incluidas === void 0) { incluidas = []; }
        this.incluidas = incluidas;
    }
    GenericBuilder.of = function () {
        return new GenericBuilder();
    };
    GenericBuilder.prototype.fase1 = function () {
        console.log('Fase 1 incluida');
        this.incluidas.push('Fase 1');
        return this;
    };
    GenericBuilder.prototype.fase2 = function () {
        console.log('Fase 2 incluida');
        this.incluidas.push('Fase 2');
        return this;
    };
    GenericBuilder.prototype.fase3 = function () {
        console.log('Fase 3 incluida');
        this.incluidas.push('Fase 3');
        return this;
    };
    GenericBuilder.prototype.fase4 = function () {
        console.log('Fase 4 incluida');
        this.incluidas.push('Fase 4');
        return this;
    };
    GenericBuilder.prototype.fase5 = function () {
        console.log('Fase 5 incluida');
        this.incluidas.push('Fase 5');
        return this;
    };
    GenericBuilder.prototype.build = function () {
        return this.incluidas;
    };
    return GenericBuilder;
}());
var GenericDirector = /** @class */ (function () {
    function GenericDirector() {
    }
    GenericDirector.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    GenericDirector.prototype.buildMinimalViableProduct = function () {
        this.builder.fase1().fase3().build();
    };
    GenericDirector.prototype.buildFullFeaturedProduct = function () {
        this.builder.fase1().fase2().fase3().fase4().fase5().build();
    };
    return GenericDirector;
}());
var builder = GenericBuilder.of();
var director = new GenericDirector();
director.setBuilder(builder);
director.buildMinimalViableProduct();
director.buildFullFeaturedProduct();

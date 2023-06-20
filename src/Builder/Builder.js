"use strict";
class GenericBuilder {
    constructor(incluidas = []) {
        this.incluidas = incluidas;
    }
    static of() {
        return new GenericBuilder();
    }
    fase1() {
        console.log('Fase 1 incluida');
        this.incluidas.push('Fase 1');
        return this;
    }
    fase2() {
        console.log('Fase 2 incluida');
        this.incluidas.push('Fase 2');
        return this;
    }
    fase3() {
        console.log('Fase 3 incluida');
        this.incluidas.push('Fase 3');
        return this;
    }
    fase4() {
        console.log('Fase 4 incluida');
        this.incluidas.push('Fase 4');
        return this;
    }
    fase5() {
        console.log('Fase 5 incluida');
        this.incluidas.push('Fase 5');
        return this;
    }
    build() {
        return this.incluidas;
    }
}
class GenericDirector {
    constructor(builder) {
        this.builder = builder;
    }
    setBuilder(builder) {
        this.builder = builder;
    }
    buildMinimalViableProduct() {
        this.builder.fase1().fase3().build();
    }
    buildFullFeaturedProduct() {
        this.builder.fase1().fase2().fase3().fase4().fase5().build();
    }
}
const builder = GenericBuilder.of();
const director = new GenericDirector(builder);
director.buildMinimalViableProduct();
director.buildFullFeaturedProduct();

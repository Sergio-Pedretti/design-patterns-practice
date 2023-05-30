class Builder {
    private constructor (
    private readonly incluidas: string[] = []
  ) {}

    static of(){
        return new Builder()
    }

    fase1(): Builder {
        console.log('Fase 1 incluida')
        this.incluidas.push('Fase 1')
        return this
    }
    fase2(): Builder {
        console.log('Fase 2 incluida')
        this.incluidas.push('Fase 2')
        return this
    }
    fase3(): Builder {
        console.log('Fase 3 incluida')
        this.incluidas.push('Fase 3')
        return this
    }
    fase4(): Builder {
        console.log('Fase 4 incluida')
        this.incluidas.push('Fase 4')
        return this
    }
    fase5(): Builder {
        console.log('Fase 5 incluida')
        this.incluidas.push('Fase 5')
        return this
    }
    build(): string[] {
        return this.incluidas
    }
}

class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.fase1().fase3().build()
    }

    public buildFullFeaturedProduct(): void {
        this.builder.fase1().fase2().fase3().fase4().fase5().build()
    }
}

const builder = Builder.of()

const director = new Director()
director.setBuilder(builder)
director.buildMinimalViableProduct()
director.buildFullFeaturedProduct()
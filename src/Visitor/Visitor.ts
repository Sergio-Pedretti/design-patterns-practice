interface Visitor {
    visitA: (e: ElementA) => void
    visitB: (e: ElementB) => void
}

class ConcreteVisitor implements Visitor {
    visitA (e: ElementA) {
        e.featureA()
    }

    visitB (e: ElementB) {
        e.featureB()
    }
}

export interface Element {
    accept: (visitor: Visitor) => void
}

class ElementA implements Element {
    accept (visitor: Visitor) {
        visitor.visitA(this)
    }

    featureA () {
        console.log('Feature A is running...')
    }
}

class ElementB implements Element {
    accept (visitor: Visitor) {
        visitor.visitB(this)
    }

    featureB () {
        console.log('Feature B is running...')
    }
}

export const main = () => {
    const element = new ElementA()
    const secondElement = new ElementB()
    const visitor = new ConcreteVisitor()
    element.accept(visitor)
    secondElement.accept(visitor)
}

main()
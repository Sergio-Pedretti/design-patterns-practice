abstract class ComponentProduct {
    abstract getPrice(): number
    add(product: ComponentProduct):void {}
    remove(product: ComponentProduct):void {}
}

class LeafProduct extends ComponentProduct {
    constructor(private name:string, private price:number){
        super()
    }

    getPrice(): number {
        return this.price
    }
}

class CompositeProduct extends ComponentProduct {
    private products: ComponentProduct[]

    constructor(products: ComponentProduct[]){
        super()
        this.products = products
    }

    add(product: ComponentProduct): void {
        this.products.push(product)
    }

    remove(product: ComponentProduct): void {
        this.products.push(product)
    }

    getPrice(): number {
        return this.products.reduce((sum, component) => {
            return sum += component.getPrice()
        },0)
    }
}

const laptop = new LeafProduct('Notebook', 10_000)
const charger = new LeafProduct('Carregador', 99)
const sueters = new LeafProduct('Sueters', 299)
const chickenBreasts = new LeafProduct('Peito de Frango', 14)

const box1 = new CompositeProduct([laptop, charger])
console.log(box1.getPrice())
box1.add(sueters)
box1.add(chickenBreasts)
console.log(box1.getPrice())

const coffeMachine = new LeafProduct('Cafeteira', 100)
const medicines = new LeafProduct('Remedios', 200)

const box2 = new CompositeProduct([coffeMachine, medicines])
console.log(box2.getPrice())

box1.add(box2)
console.log(box1.getPrice())




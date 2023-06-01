export interface Meat {
    clone: () => any
}

class MyMeat implements Meat {
    flavor: string
    cost: number
    weight: string

    constructor(){
        this.flavor = ''
        this.weight = ''
        this.cost = 1
    }
    clone(): MyMeat {
        return JSON.parse(JSON.stringify(this))
    }
}

class Angus extends MyMeat {
    flavor = 'great'
    cost = 59
    weight = '1kg'

    clone(): Angus {
        return JSON.parse(JSON.stringify(this))
    }
}

const myAngus = new Angus()
console.log(myAngus.cost, myAngus.flavor, myAngus.weight)
const copyAngus = myAngus.clone()
copyAngus.cost = 10
console.log(myAngus.cost, copyAngus.cost)



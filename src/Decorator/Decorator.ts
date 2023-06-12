interface Outfit {
    name: string
    getName: () => string
}

class Tshirt implements Outfit {
    name: string = 'Camisa'

    getName(): string  {
        return this.name
    }
}

class OutfitDecorator implements Outfit {
    name: string = 'Decorator'
    constructor(protected outfit:Outfit){
    }

    getName(): string {
        return this.outfit.getName()
    }
}

class Coat extends OutfitDecorator {
    getName(): string {
        return this.outfit.getName() + ' com casaco'
    }
}

const tshirt = new Tshirt()
const tshirtWithCoat = new Coat(tshirt)
console.log(tshirt.getName())
console.log(tshirtWithCoat.getName())
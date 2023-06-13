interface DeliveryFlyweight {
    deliver: (name: string, number: string) => void
}

type LocationDeliveryInput = {
    readonly street: string
    readonly city: string 
}

class LocationDelivery implements DeliveryFlyweight {
    constructor(private readonly intrinsicState:LocationDeliveryInput){}

    deliver (name: string, number: string) {
        console.log('Entrega para %s', name)
        console.log('Em', this.intrinsicState.street, this.intrinsicState.city)
        console.log('Número: ', number)
        console.log('######')
    }
}

type LocationDeliveryDictionary = Record<string, LocationDelivery>

class DeliveryFactory {
    private locations: LocationDeliveryDictionary = {}

    generateKey(input: LocationDeliveryInput): string {
        return Object.values(input).map(item => item.replace(/\s+/, '')).join('_')
    }

    makeLocation(intrinsicState: LocationDeliveryInput): DeliveryFlyweight {
        const key = this.generateKey(intrinsicState).toLowerCase()
        if(key in this.locations) return this.locations[key]
        this.locations[key] = new LocationDelivery(intrinsicState)
        return this.locations[key]
    }

    getLocation(): LocationDeliveryDictionary {
        return this.locations       
    }
}


const deliveryContext = (
    factory: DeliveryFactory,
    name: string,
    number: string,
    street: string,
    city: string
):void => {
    const location = factory.makeLocation({street, city})
    location.deliver(name, number)
}

const mainCode = () => {
    const myFactory = new DeliveryFactory()
    console.time('1')
    deliveryContext(myFactory, 'Sérgio', '1054', 'Avenida Silva Jardim', 'Curitiba')
    console.timeEnd('1')
    console.time('2')
    deliveryContext(myFactory, 'Andreia', '1054', 'Avenida Silva Jardim', 'Curitiba')
    console.timeEnd('2')
    console.time('3')
    deliveryContext(myFactory, 'Jaqueline', '167', 'Coronel Zamith', 'Friburgo')
    console.timeEnd('3')
}

mainCode()

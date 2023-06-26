interface Strategy {
    execute: () => void
}

class Walking implements Strategy {
    execute () {
        console.log('I\'ll go walking, it is free but I will get there in 3 hours')
    }
}

class Bus implements Strategy {
    execute () {
        console.log('I\'ll go by bus, it cost 4 reais but I will get there in 40 minutes')
    }
}

class Uber implements Strategy {
    execute () {
        console.log('I\'ll take an Uber, it cost 12 reais but I will get there in 10 minutes')
    }
}

class Context {
    constructor(private strategy: Strategy){
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy
    }

    execute () {
        this.strategy.execute()
    }

}

export const main = () => {
    const walking = new Walking()
    const bus = new Bus()
    const uber = new Uber()

    const context = new Context(walking)
    context.execute()
    context.setStrategy(bus)
    context.execute()
    context.setStrategy(uber)
    context.execute()
}

main()


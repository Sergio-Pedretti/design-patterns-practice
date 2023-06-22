export interface Publisher {
    notify: () => void
    subscribe: (subscriber: Subscriber) => void
    unsubscribe: (subscriber: Subscriber) => void;

}

interface Subscriber {
    update: (publisher: Publisher) => void
}

class ConcreteSubscriber implements Subscriber {
    update (publisher: Publisher) {
       console.log("ConcreteSubscriber: Reagindo.");
    }
}

class ConcretePublisher implements Publisher {
    private currentSubscriber: Subscriber[]

    constructor () {
        this.currentSubscriber = []
    }

    subscribe (subscriber: Subscriber) {
        this.currentSubscriber.push(subscriber)
    }

    unsubscribe (subscriber: Subscriber) {
        const index = this.currentSubscriber.indexOf(subscriber)
        this.currentSubscriber.splice(index, 1)
    }

    notify () {
        for(const sub of this.currentSubscriber){
            sub.update(this)
        }
    }
}

export const main = () => {
    const publisher = new ConcretePublisher()
    const subscriber = new ConcreteSubscriber()
    publisher.subscribe(subscriber)
    publisher.notify()
}

main()
type MyState = {
    text: string
    x: number
    y: number
}

interface  Memento {
    restore: () => void
}

class ConcreteMemento implements Memento {
    private originator: ConcreteOriginator
    private state: MyState

    constructor (originator: ConcreteOriginator, state: MyState) {
        this.state = state
        this.originator = originator
    }


    restore(): MyState {
        this.originator.setState(this.state)
        this.originator.save()
        return this.state
    }
}

interface Originator {
    save: () => Memento
}

class ConcreteOriginator implements Originator {
    private state: MyState = {} as MyState

    save (): Memento {
        return new ConcreteMemento(this, this.state)
    }

    setState (state: MyState) {
        this.state = state
    }
}

class Historic {
    private history: Memento[] = []

    constructor(private readonly originator: Originator){}

    execute () {
        console.log('BACKUP salvando...')
        this.history.push(this.originator.save())
    }

    undo () {
        const memento = this.history.pop()
        if(!memento){
            console.log('SEM BACKUP')
            return
        }
        memento.restore()
    }
}


export const main = () => {
    const originator = new ConcreteOriginator()
    const history = new Historic(originator)

    const firstMove = {
        text: 'Cursor',
        x: 5,
        y: 5
    }

     const secondMove = {
        text: 'Cursor',
        x: 15,
        y: 15
    }
    originator.setState(firstMove)
    history.execute()
    console.log(originator)
    console.log('########')
    originator.setState(secondMove)
    history.execute()
    console.log(originator)
    console.log('########')
    history.undo()
    console.log(originator)
    console.log('########')
    history.undo()
    console.log(originator)
    console.log('########')
}

main()


interface State {
    setContext: (context: Context) => void
    doThis: () => void
    doThat: () => void
}

class Context {
    private state: State

    constructor(initialState: State){
        this.state = initialState
        initialState.setContext(this)
    }

    changeState(state: State) {
        this.state = state
    }

    doThis() {
        this.state.doThis()
    }

    doThat() {
        this.state.doThat()
    }
}

class ConcreteStateA implements State {
    private context: Context | null = null

    setContext(context: Context){
        this.context = context
    }

    doThis () {
        console.log('ConcreteStateA doing this')
    }

    doThat () {
        console.log('ConcreteStateA doing that')
        if(this.context === null) return
        const otherState = new ConcreteStateB()
        this.context.changeState(otherState)
    }
}

class ConcreteStateB implements State {
    private context: Context | null = null

    setContext(context: Context){
        this.context = context
    }

    doThis () {
        console.log('ConcreteStateB doing this')
    }

    doThat () {
        console.log('ConcreteStateB doing that')
    }
}

export const main = () => {
    const myState = new ConcreteStateA()
    const context = new Context(myState)
    context.doThis()
    context.doThat()
    context.doThis()
    context.doThat()
}

main()
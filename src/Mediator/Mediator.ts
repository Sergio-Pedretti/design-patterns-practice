interface Mediator {
    notify: (sender: Component, event: string) => void
}

class AuthDialog implements Mediator {
    private title: string
    private loginOrRegister: boolean
    private ok: Component
    private cancel: Component

    constructor (component: Component) {
        this.title = 'Botão'
        this.loginOrRegister = true
        this.ok = component
        this.cancel = component
        this.ok.setMediator(this)
        this.cancel.setMediator(this)
    }

    notify (sender: Component, event: string) {
        if(sender === this.ok && event === 'click'){
            console.log('Botão Clicado')
        }   
    }
}

class Component {
    protected mediator: Mediator

    constructor (mediator?: Mediator){
        this.mediator = mediator!
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class Button extends Component {
    click () {
        this.mediator.notify(this, 'click')
    }

    keyPress () {
        this.mediator.notify(this, 'keyPress')
    }
}

export const main = () => {
    const button = new Button()
    new AuthDialog(button)

    button.click()
}

main()
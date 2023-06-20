interface Command {
    execute: () => void
}

class Invoker {
    private command: Command | null = null

    setCommand (command: Command): void {
        this.command = command
    }

    executeCommand(): void {
        if(this.command !== null)
        this.command.execute()
    }
}
class ConcreteCommand implements Command {
    constructor(private receiver: Receiver, private params:any){}

    execute () {
        console.log('RECEBIDO')
        this.receiver.operation(this.params)
    }
}

class Receiver {
    operation(params: any) {
        console.log('GG', params)
    }
}


const receiver = new Receiver()

const commander = new ConcreteCommand(receiver, 'RATO')

const justAClient = new Invoker()
justAClient.setCommand(commander)
justAClient.executeCommand()



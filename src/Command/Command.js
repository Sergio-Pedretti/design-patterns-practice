"use strict";
class Invoker {
    constructor() {
        this.command = null;
    }
    setCommand(command) {
        this.command = command;
    }
    executeCommand() {
        if (this.command !== null)
            this.command.execute();
    }
}
class ConcreteCommand {
    constructor(receiver, params) {
        this.receiver = receiver;
        this.params = params;
    }
    execute() {
        console.log('RECEBIDO');
        this.receiver.operation(this.params);
    }
}
class Receiver {
    operation(params) {
        console.log('GG', params);
    }
}
const receiver = new Receiver();
const commander = new ConcreteCommand(receiver, 'RATO');
const justAClient = new Invoker();
justAClient.setCommand(commander);
justAClient.executeCommand();

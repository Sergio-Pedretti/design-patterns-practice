"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class ConcreteMemento {
    constructor(originator, state) {
        this.state = state;
        this.originator = originator;
    }
    restore() {
        this.originator.setState(this.state);
        this.originator.save();
        return this.state;
    }
}
class ConcreteOriginator {
    constructor() {
        this.state = {};
    }
    save() {
        return new ConcreteMemento(this, this.state);
    }
    setState(state) {
        this.state = state;
    }
}
class Historic {
    constructor(originator) {
        this.originator = originator;
        this.history = [];
    }
    execute() {
        console.log('BACKUP salvando...');
        this.history.push(this.originator.save());
    }
    undo() {
        const memento = this.history.pop();
        if (!memento) {
            console.log('SEM BACKUP');
            return;
        }
        memento.restore();
    }
}
const main = () => {
    const originator = new ConcreteOriginator();
    const history = new Historic(originator);
    const firstMove = {
        text: 'Cursor',
        x: 5,
        y: 5
    };
    const secondMove = {
        text: 'Cursor',
        x: 15,
        y: 15
    };
    originator.setState(firstMove);
    history.execute();
    console.log(originator);
    console.log('########');
    originator.setState(secondMove);
    history.execute();
    console.log(originator);
    console.log('########');
    history.undo();
    console.log(originator);
    console.log('########');
    history.undo();
    console.log(originator);
    console.log('########');
};
exports.main = main;
(0, exports.main)();

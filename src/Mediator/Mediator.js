"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
class AuthDialog {
    constructor(component) {
        this.title = 'Botão';
        this.loginOrRegister = true;
        this.ok = component;
        this.cancel = component;
        this.ok.setMediator(this);
        this.cancel.setMediator(this);
    }
    notify(sender, event) {
        if (sender === this.ok && event === 'click') {
            console.log('Botão Clicado');
        }
    }
}
class Component {
    constructor(mediator) {
        this.mediator = mediator;
    }
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Button extends Component {
    click() {
        this.mediator.notify(this, 'click');
    }
    keyPress() {
        this.mediator.notify(this, 'keyPress');
    }
}
const main = () => {
    const button = new Button();
    new AuthDialog(button);
    button.click();
};
exports.main = main;
(0, exports.main)();

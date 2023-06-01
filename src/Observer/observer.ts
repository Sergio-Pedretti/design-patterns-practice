interface Subject {
  subscribe: (name: Subscriber) => void;
  unsubscribe: (name: Subscriber) => void;
  notify: () => void;
}

interface Subscriber {
  update: (subject: Subject) => void;
}

class ConcreteSubject implements Subject {
  public status: number;
  private subscribersList: Subscriber[];

  constructor() {
    this.status = 0;
    this.subscribersList = [];
  }

  public subscribe(name: Subscriber): void {
    const isSubscriber = this.subscribersList.includes(name);
    if (isSubscriber) {
      return console.log("Já está inscrito parceiro");
    }
    this.subscribersList.push(name);
    return console.log("Inscrito com sucesso!");
  }
  public unsubscribe(name: Subscriber): void {
    const isSubscriber = this.subscribersList.indexOf(name);
    if (isSubscriber === -1) {
      return console.log(`Não está inscrito na lista`);
    }
    this.subscribersList.splice(isSubscriber, 1);
    return console.log(`Foi retirado da lista!`);
  }
  public notify(): void {
    console.log("Notificando todos");
    for (const Subscriber of this.subscribersList) {
      Subscriber.update(this);
    }
  }
  public doLogic() {
    console.log("Mensagem para Inscritos: Atualizando...");
    this.status = Math.floor(Math.random() * (10 + 1));

    console.log(`Estado foi alterado para: ${this.status}`);
    this.notify();
  }
}

class ConcreteSubscriberA implements Subscriber {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.status < 3) {
      console.log("ConcreteSubscriberA: Reagindo.");
    }
  }
}

class ConcreteSubscriberB implements Subscriber {
  public update(subject: Subject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.status === 0 || subject.status >= 2)
    ) {
      console.log("ConcreteSubscriberB: Reagindo.");
    }
  }
}

const subject = new ConcreteSubject();

const subscriber1 = new ConcreteSubscriberA();
subject.subscribe(subscriber1);

const subscriber2 = new ConcreteSubscriberB();
subject.subscribe(subscriber2);

subject.doLogic();
subject.doLogic();

subject.unsubscribe(subscriber2);

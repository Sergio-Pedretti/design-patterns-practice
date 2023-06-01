class MinhaLingua {
  public Portugues(): string {
    return "Eu só Falo Pt-BR";
  }
}

class ExternaIngles {
  public Ingles(): string {
    return "I am Speaking in English!";
  }
}

class Adapter extends MinhaLingua {
  private adaptador: ExternaIngles;

  constructor(adaptador: ExternaIngles) {
    super();
    this.adaptador = adaptador;
  }
  public Portugues(): string {
    const translate = this.adaptador.Ingles();
    return `(${translate}) -> Eu estou falando em Inglês`;
  }
}

function clientCode(target: MinhaLingua) {
  console.log(target.Portugues());
}

const minhaLingua = new MinhaLingua();
clientCode(minhaLingua);

console.log("");

const externaIngles = new ExternaIngles();
console.log(externaIngles.Ingles());

console.log("");

const adaptador = new Adapter(externaIngles);
clientCode(adaptador);

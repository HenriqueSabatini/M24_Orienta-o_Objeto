function Heroi (nome, poder, identidade) {
    this.nome = nome
    this.poder = poder;
    this.identidade = identidade
}

function Vilao (nome, poder, identidade, roupa) {
    Heroi.call(this, nome, poder, identidade);
    this.roupa = roupa;
}

function AntiHeroi (nome, poder, identidade, cidade) {
    Heroi.call(this, nome, poder, identidade);
    this.cidade = cidade;
}

const SpiderMan = new Heroi ("SpiderMan", "Solta Teias", "Peter Parker");
const Joker = new Vilao ("Joker", "Louco", "Arthur", "Palhaço");
const Deadpoll = new AntiHeroi ("Deadpool", "Cancer Humano", "Wade", "Washington");

console.log(SpiderMan);
console.log(Joker);
console.log(Deadpoll);
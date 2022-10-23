class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criar_pessoa = nome => {
    return {
        falar: _ => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criar_pessoa('Ana')
p2.falar()
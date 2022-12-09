const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito de paradigmas: funcional e OO

const falar_de_pessoa = pessoa.falar.bind(pessoa)
falar_de_pessoa()
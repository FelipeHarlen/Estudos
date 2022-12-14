function get_preco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    get_preco
}

global.preco = 20
global.desc = 0.1

console.log(get_preco())
console.log(produto.get_preco())

const carro = {
    preco: 49990,
    desc: 0.2
}

console.log(get_preco.call(carro))
console.log(get_preco.apply(carro))

console.log(get_preco.call(carro, 0.17, 'R$'))
console.log(get_preco.apply(global, [0.17, 'R$']))
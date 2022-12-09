function criar_produto(nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criar_produto('Notebook', 2199.49))
console.log(criar_produto('iPad', 1199.49))
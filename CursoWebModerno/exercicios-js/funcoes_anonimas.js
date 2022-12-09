const soma = function(x, y){
    return x + y
}

const imprimir_resultados = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimir_resultados(3, 4)
imprimir_resultados(3, 4, function (x, y){
    return x - y
})
imprimir_resultados(3, 4, (x, y) => x * y)

const Pessoa = {
    falar: function(){
        console.log('Opa!')
    }
}

Pessoa.falar()
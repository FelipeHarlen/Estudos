// Arroz Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)

const lexico_1 = _ => console.log(this === exports)
const lexico_2 = lexico_1.bind({})
lexico_1()
lexico_2()

// Parâmetros default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log("I'm strongest!")

// Rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))
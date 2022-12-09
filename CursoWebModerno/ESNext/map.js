const tecnologia = new Map()
tecnologia.set('react', {framework: false})
tecnologia.set('angular', {framework: true})

console.log(tecnologia.get('react'))
console.log(tecnologia.get('angular').framework)

const chaves_variadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chaves_variadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaves_variadas.has(123))
chaves_variadas.delete(123)
console.log(chaves_variadas.has(123))
console.log(chaves_variadas.size)
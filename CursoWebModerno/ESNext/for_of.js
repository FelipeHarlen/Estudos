for(let letra of "Cod3r"){
    console.log(letra)
}

const assuntos_ecma = ['Map', 'Set', 'Promise']

for(let i in assuntos_ecma){
    console.log(i)
}

for(let assunto of assuntos_ecma){
    console.log(assunto)
}

const assuntos_map = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntos_map){
    console.log(assunto)
}

for(let chave of assuntos_map.keys()){
    console.log(chave)
}

for(let valor of assuntos_map.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntos_map.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}
function gerar(min, max, num_proibidos) {
    if (min > max) 
        [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator) + min

        if(num_proibidos.includes(random))
            reject('Número repetido!')
        else
            resolve(random)
    })
}

async function mega_sena(qtde_num, tentativas = 0){
    try {
        const numeros = []
        for(let _ of Array(qtde_num).fill()){
            numeros.push(await gerar(1, 60, numeros))
        }
        return numeros.sort((a, b) => a - b)
    } catch (e) {
        if(tentativas > 100)
            throw 'Que chato!!!'
        else
           return mega_sena(qtde_num, tentativas + 1)
    }
}

mega_sena(15)
    .then(console.log)
    .catch(console.log)
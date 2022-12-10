function gerar(min, max, tempo) {
    if (min > max) 
        [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout( _ => {
            const fator = max - min + 1
            const random = parseInt(Math.random() * fator) + min
            resolve(random)
        }, tempo)  
    })
}

function gerar_varios(){
    return Promise.all([
        gerar(1, 60, 4000),
        gerar(1, 60, 1000),
        gerar(1, 60, 500),
        gerar(1, 60, 3000),
        gerar(1, 60, 100),
        gerar(1, 60, 1500)
    ])
}

gerar_varios().then(console.log)
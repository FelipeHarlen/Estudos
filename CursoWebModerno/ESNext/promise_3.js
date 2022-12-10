function gerar(min, max) {
    if (min > max) 
        [max, min] = [min, max]

    return new Promise(resolve => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator) + min
        resolve(random)
    })
}

gerar(1, 60)
    .then(num => num * 10)
    .then(num_x_10 => `O número gerado foi ${num_x_10}`)
    .then(console.log)
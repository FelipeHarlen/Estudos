function esperar_por(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(_ => resolve(), tempo)
    })
}

// esperar_por(2000)
//     .then(_ => console.log('Execuytando promise 1...'))
//     .then(esperar_por)
//     .then(_ => console.log('Execuytando promise 2...'))
//     .then(esperar_por)
//     .then(_ => console.log('Execuytando promise 3...'))

function retornar_valor() {
    return new Promise( resolve => {
        setTimeout(_ => resolve(10), 5000)
    })
}

async function executar(){
    let valor = await retornar_valor()

    await esperar_por()
    console.log(`Async/Await ${valor}...`)

    await esperar_por()
    console.log(`Async/Await ${valor + 1}...`)

    await esperar_por()
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

const receber_valor = async _ => await executar()

const valor = receber_valor().then(console.log)
// executar().then(console.log)
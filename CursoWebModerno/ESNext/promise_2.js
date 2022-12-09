// setTimeout(function() {
//     console.log('Executando callback...')
    
//     setTimeout(function() {
//         console.log('Executando callback...')
    
//         setTimeout(function() {
//             console.log('Executando callback...')
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperar_por(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperar_por()
    .then(_ => esperar_por())
    .then(esperar_por)
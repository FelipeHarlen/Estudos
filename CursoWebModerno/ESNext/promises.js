const { resolve } = require("path");

function falar_depois_de(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falar_depois_de(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outra_frase => console.log(outra_frase))
    .catch(e => console.log(e))
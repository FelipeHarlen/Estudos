const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function ler_arquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

ler_arquivo(caminho).then(console.log)
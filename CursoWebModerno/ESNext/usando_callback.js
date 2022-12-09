// sem promise
const http = require('http')

const get_turmas = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', _ => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
get_turmas('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    get_turmas('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        get_turmas('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
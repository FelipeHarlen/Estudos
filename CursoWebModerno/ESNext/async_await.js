// com promise
const http = require('http')

const get_turmas = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', _ => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...

let obter_alunos = async _ => {
    const ta = await get_turmas('A')
    const tb = await get_turmas('B')
    const tc = get_turmas('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

obter_alunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
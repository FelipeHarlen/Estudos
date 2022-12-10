function funcionar_ou_nao(valor, chance_de_erro){
    return new Promise((resolve, reject) => {
        try{
            if(Math.random() < chance_de_erro)
                reject('Ocorreu um erro!')
            else
                resolve(valor)
        } catch(e){
            reject(e)
        }         
    })
}

funcionar_ou_nao('Testando...', .4)
    .then(console.log)
    .catch(err => console.log(`Erro -> ${err}`))
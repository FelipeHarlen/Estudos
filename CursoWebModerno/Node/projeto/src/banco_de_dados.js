const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const produtos = {}

function salvar_produto(produto){
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function get_produto(id){
    return produtos[id] || {}
}

function get_produtos(){
    return Object.values(produtos)
}

function excluir_produto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvar_produto, get_produto, get_produtos, excluir_produto}
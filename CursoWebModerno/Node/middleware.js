const passo_1 = (ctx, next) => {
    ctx.valor_1 = 'mid1'
    next()
}

const passo_2 = (ctx, next) => {
    ctx.valor_2 = 'mid2'
    next()
}

const passo_3 = ctx => ctx.valor_3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const exec_passo = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => exec_passo(indice + 1))
    }
    exec_passo(0)
}

const ctx = {}
exec(ctx, passo_1, passo_2, passo_3)
console.log(ctx)
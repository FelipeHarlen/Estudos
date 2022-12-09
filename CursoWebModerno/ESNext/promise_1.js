const primeiro_elemento = array => array[0]
const letra_minuscula = letra => letra.toLowerCase()

Promise.resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
    .then(primeiro_elemento)
    .then(primeiro_elemento)
    .then(letra_minuscula)
    .then(console.log)
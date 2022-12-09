// Operadpr ... rest/spread
// usar rest com parâmetros de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupo_a = ['João', 'Pedro', 'Glória']
const gurpo_final = ['Maria', ...grupo_a, 'Rafaela']
console.log(gurpo_final)
/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores.
 */

const quatro_op = (x, y) => {
    console.log(`Soma: ${x + y}`)
    console.log(`Soma: ${x - y}}`)
    console.log(`Soma: ${x * y}`)
    console.log(`Soma: ${x / y}`)
}

quatro_op(9, 3)

/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */

const triangulo = (a, b, c) => {
    if(a == b && a == c)
        return 'Equilátero'
    else if(a == b || a == c || b == c)
        return 'Isósceles'
    else
        return 'Escaleno'
}

console.log(triangulo(3, 3, 3))
console.log(triangulo(4, 4, 3))
console.log(triangulo(3, 4, 5))

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const pot = (base, exp) => {
    if(exp == 0)
        return 1
    else if(exp == 1)
        return base
    return base * pot(base, exp - 1)
}

console.log(pot(2, 10))

/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 */

const div = (dividendo, divisor) => console.log(`Resultado: ${(dividendo / divisor) | 0}\nResto: ${dividendo % divisor}`)

div(2, 3)

/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
 * seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
 * importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
 * um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
 * que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). 
 */

const dinheiro = valor => {
    let floor = valor | 0
    return `R$ ${floor},${((valor - floor) * 100) | 2}`
}

console.log(dinheiro(0.30000000000000004))
console.log(dinheiro(1287.77))

/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
 */

const juros_simples = (cp_inicial, tx_juros, tm_aplicacao) => cp_inicial + (cp_inicial * tx_juros / 100 * tm_aplicacao)
const juros_compostos = (cp_inicial, tx_juros, tm_aplicacao) => cp_inicial * ((1 + tx_juros / 100) ** tm_aplicacao)

console.log(juros_simples(100, 5, 14))
console.log(juros_compostos(100, 5, 14))

/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
 * elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
 * parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
 * -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
 * que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
 * “Delta é negativo”.
 */

const equacao = (a, b, c) => {
    let delta = (b ** 2) - 4 * a * c

    if(delta < 0)
        return "Delta é negativo"

    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)

    return [x1, x2]
}

console.log(equacao(1, 1, -6))

/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
 * registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
 * mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
 * pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
 * vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
 * jogo. (Número do pior jogo).
 * 
 * Obs.: O primeiro jogo não conta como novo recorde do melhor.
 * Exemplo:
 * String: “10 20 20 8 25 3 0 30 1”
 * Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
 * aconteceu no sétimo jogo.)
 */

function record(str){
    let arr = str.split(' ')
    arr = arr.map(Number)

    let [rec, rec_quebrados, pior_jogo, pior_pontuacao] = [arr[0], 0, null, 10000]

    for(let i = 0; i < arr.length; i++){

        if(arr[i] < pior_pontuacao){
            pior_jogo = i + 1
            pior_pontuacao = arr[i]
        }
        
        if(arr[i] > rec){
            rec = arr[i]
            rec_quebrados++
        }     
    }

    return [rec_quebrados, pior_jogo]
}

console.log(record('10 20 20 8 25 3 30 0 1'))

/* 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
 * classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
 * possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
 * que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
 * arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
 * 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
 * seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
 * e o aluno será aprovado.
 */

const avaliacao = nota => {
    if(nota < 38)
        return ['reprovado', nota]
 
    let distancia = 5 - (nota % 5)

    if(distancia && distancia < 3)
        nota += distancia

    return ['aprovado', nota]
}

console.log(avaliacao(45))

/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 * ou false.
 */

const div_por_3 = numero => !(numero % 3)

console.log(div_por_3(18))

/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
 * De 4 em 4 anos é ano bissexto;
 * De 100 em 100 anos não é ano bissexto;
 * De 400 em 400 anos é ano bissexto;
 * Prevalecem as últimas regras sobre as primeiras.
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
 * mensagem e retornando true ou false.
 */

function bissexto(ano){
    if(!(ano % 400))
        return true
    if(!(ano % 100))
        return false
    return !(ano % 4)
}

console.log(bissexto(2024))

// 12) Faça um algoritmo que calcule o fatorial de um número.

const fatorial = numero => numero < 2 ? 1 : numero * fatorial(numero - 1)

console.log(fatorial(5))

/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
 * dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function dia_util(dia){
    switch(dia){
        case 1: case 7:
            console.log('Fim de semana!')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil!')
            break
        default:
            console.log('Dia inválido!')
    }
}

dia_util(7)
dia_util(3)
dia_util(10)

/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
 * para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

function notas(valor){
    const opcoes = [100, 50, 20, 10, 20, 5, 2, 1]
    let notas_necessarias = ''

    opcoes.forEach(op => {
        let q = Math.trunc(valor / op)

        if(q){
            notas_necessarias +=  `${q} nota(s) de ${op}. `
            valor %= op
        }
    })

    console.log(notas_necessarias)
}

notas(1563)
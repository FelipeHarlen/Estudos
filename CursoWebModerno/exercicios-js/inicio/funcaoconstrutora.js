function Carro(velocidade_maxima = 200, delta = 5){
    // atributo privado
    let velocidade_atual = 0

    // metodo publico
    this.acelerar = function (){
        if(velocidade_atual + delta <= velocidade_maxima)
            velocidade_atual += delta
        else
            velocidade_atual = velocidade_maxima
    }

    //metodo publico
    this.get_velocidade_atual = _ => velocidade_atual
}

const uno = new Carro
uno.acelerar()
console.log(uno.get_velocidade_atual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.get_velocidade_atual())

console.log(typeof(Carro))
console.log(typeof(uno))
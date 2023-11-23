// 1 - Criando uma função

function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao()

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa")
funcaoComParametro("outra função")

// 2 - Return

const a = 10, b = 20, c = 30, d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)

console.log(resultado)
console.log(soma(c, d))

// 3 - Escopo da função

let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo()
console.log(`Y fora da função é: ${y}`)
testandoEscopo()

// 4 - Escopo aninhado

let m = 10

function escopoAninhado(){
    let m = 20

    if(true) {
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado()

console.log(m)

// 5 - Arrow function 

const testeArrow = () => {
    console.log("Esta é uma arrow function")
}

testeArrow()

var n = prompt("digite um número: ") //teste feito por mim
const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par")
        return
    }
    console.log("Impar")
}

parOuImpar(n)
parOuImpar(n)

// 6 - Mais sobre arrow functions

const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5))
console.log(raizQuadrada2(12))

const helloWorld = () => console.log("Hello World")

console.log(helloWorld()) // vai dar indefinindo
helloWorld()

// 7 - Parametros opcionais

const multiplicacao = function(m, n) {
    if (n === undefined) {
        return m * m
    } else {
        return m * n
    }
}

console.log(multiplicacao(3))
console.log(multiplicacao(2, 8))

const greeting = (name) => {
    if(!name) {
        console.log("Olá")
        return
    }

    console.log(`Olá ${name}`)
}

greeting()
greeting("Johne")

// 8 - Valor default

const customGreeting = (nome, greet = "Olá") => {
    return `${greet}, ${nome}`
}

console.log(customGreeting("Johne"))
console.log(customGreeting("Johne", "Bom dia"))

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text)
    }
}

repeatText("Testando")

repeatText("Agora repete 5 vezes", 5)

// 9 - Closure

function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }

    display()
}

someFunction()

// 10 - Mais sobre closure 

const multiplicacaoClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicacaoClosure(5)
const c2 = multiplicacaoClosure(10)

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))

// 11 - Recursion

const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m
        console.log(x)

        untilTen(x, m)
    }
}
untilTen(100, 7)

// infinite recursion

// function run() {
//     console.log("Executando...")
//     run()
// }

// run()

function factorial(x) {
    if(x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num)

console.log(`O fatorial de número ${num} é ${result}`)
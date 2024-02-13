// 1 - arrays
const lista = [1,2,3,4,5]
console.log(lista)
console.log(typeof lista)

const itens = ["Johne", true, 14, ["Keyvid"], false]
console.log(itens)

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d"]
console.log(arr[0])
console.log(arr[2])
console.log(arr[93])

// 3 - Propriedades
const numbers = [5, 3, 4]
console.log(numbers.length)
console.log(numbers["length"])

const myName = "Johne"
console.log(myName.length)

// 4 - Métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const text = "algum texto"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase())
console.log(text.indexOf("g"))

// 5 - Objetos

const person = {
    name: "Johne",
    age: 20,
    job: "Motorista"
}

console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 6 - Criando e deletando propriedades

const car = {
    engine: 1.0,
    brand: "hyundai",
    model: "hb20",
    km: 23500
}

console.log(car)

car.doors = 4
console.log(car)

delete car.km
console.log(car)

// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)
console.log(obj)
console.log(obj2)


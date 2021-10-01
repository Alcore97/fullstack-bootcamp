console.log('hola')

let names = 'Miguel'
const number = 4
var isDeveloper = true

names = names.toUpperCase();

console.log(names);// MIGUEL

const list = []
list.push(1)

console.log(list[0]) // En lista hay un 1

const anotherList = list.concat(157)

const persona = {
    name: 'Miguel',
    twitter: '@midudev',
    age: 18, 
    isDeveloper: true, 
    links: ['https://midu.tube', 'https://midu.live']
}

console.log(persona.name);
console.log(persona.links[0]);

const sumar = (op1,op2) => {
    return op1+op2;
}
console.log(sumar(2,2));





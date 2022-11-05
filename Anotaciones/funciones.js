//Funcion normalita

// function saludar(nom){
//     return `Hola ${nom}`;
// }
// const mensaje=saludar("awa")
// console.log(mensaje)

//Funcion anonima (verificar)

// const saludar=function (nom){
//     return `Hola ${nom}`;
// }
// const mensaje=saludar("awawa")
// console.log(mensaje)

//Funcion flecha => no necesita return porque ya tiene uno implicito, si es de una sola linea no hace falta las llaves
//Tampoco es necesario los parentesis en el caso de haber UN SOLO parametro
// const saludar= (nom)=> `Hola ${nom}`;
// const mensaje=saludar("awawa")
// console.log(mensaje)

//------------------Ejercicio-------------------

// *Todas las funciones tendrán que ser realizadas con sintaxis flecha.*

// Definiremos una función llamada operación que reciba como parámetro dos
// valores y una función con la operación que va a realizar. Deberá retornar el
// resultado.

const operacion=(func, num1, num2)=>func(num1,num2);

// Definiremos las siguientes funciones:suma, resta,multiplicación, división y
// módulo. Estas recibirán dos valores y de volverán el resultado. Serán pasadas
// como parámetro en la llamada a la función operación


const suma=(num1, num2)=>num1+num2
const resta=(num1, num2)=>num1-num2
const multiplicacion=(num1, num2)=>num1*num2
const division=(num1, num2)=>num1/num2

console.log(operacion(suma, 2,4))
console.log(operacion(resta, 8,4))
console.log(operacion(multiplicacion, 2,4))
console.log(operacion(division, 10,5))


// Resuelto en clase:
// const calculadora = (num1, num2, operacion) => operacion(num1, num2);
// const sumar = (a, b) => a + b;
// const restar = (a, b)=> a = b;
// const suma = calculadora(3, 5, sumar);
// console.log(suma);
// const resta = calculadora(6, 3, restar);
// console.log(resta) ;
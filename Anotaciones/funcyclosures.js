const nota=9


// Definir la función mostrarlista que reciba una lista de datos y muestre su
// contenido,si no está vacía, o de lo contrario muestre el mensaje: "lista vacía".
// Luego, invocarla con datos de prueba para verificar que funciona bien en ambos
// casos. - :D (error creando el array)

// function mostrarLista(lista){
//     if(lista.length==0){
//         console.log("aña")
//     }else{
//         console.log("lista")
//     }
// }
// mostrarLista([]);
// mostrarLista([87,54])

// Definir una función anónima que haga lo mismo que la del punto 1, e invocarla 
// inmediatamente,pasando una lista con 3 números como argumento. + :D

// (function(lista){
//     if(lista.length==0){
//         console.log("aña anonimo")
//     }else{
//         console.log(lista)
//     }
// })([4,5,8])

// Definir la función crearMultiplicador que reciba un número y devuelva una
// función anónima que reciba segundo número y dé como resultado el producto de
// ambos. + :D

// function crearMultiplicador(numero){
//     (function(segNum){
//         numFinal=numero*segNum //numero=closure
//         console.log(numFinal)
//     })(3)
// }

//crearMultiplicador(2);

// Luego,a partir de la función definida, crear dos funciones duplicar y
// triplicar, y probarlas con diferentes valores. + :D

function duplicar(){
    (function(num){
        console.log(num*2)
    })(30)
}

function triplicar(){
    (function(num){
        console.log(num*3)
    })(50)
}

duplicar();
triplicar();
// En este ejercicio construiremos una herramienta que permita que diferentes personas
// puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo
// que nos brinde una contabilidad general del total contado.Para ello:
// 1) Definir la clase Contador.
// 2) Cada instancia de contador debe ser identificada con el nombre de la persona
// responsable de ese conteo.
// 3) Cada instancia inicia su cuenta individual en cero.
class Contador{
    constructor(nombRes){
        this.nombRes=nombRes;
        this.cuenta=0;
    }
// 4) La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo
// contado por sus instancias, el cual también inicia en cero.
    static cantCont=0;
// 5) Definir un método obtener Responsable que devuelva el nombre del responsable
// de la instancia.
    obtenerResponsable(){
        console.log("el responsable es"+this.nombRes);
    }
// 6) Definir un método obtenerCuenta Individual que devuelva la cantidad contada
// por la instancia.
    obtenerCuenta(){
        console.log("la cuenta individual de "+this.nombRes+" es: "+this.cuenta);
    }
// 7) Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por
// todos los contadores creados hasta el momento.
    obtenerCuentaGlobal(){
        console.log(Contador.cantCont)
    }
// 8) Definir el método contar que incremente en uno tanto la cuenta individual como la
// cuenta general    
    contar(){
        this.cuenta++
        Contador.cantCont++
    }
}

const per=new Contador('juan');
const perr=new Contador('pepe');
console.log(Contador, per, perr);
per.contar();
per.contar();
console.log(per)

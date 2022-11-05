class Ventilador{
    constructor(marca, modelo){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidad=0;
    }
    prender(){ //puede ser también prender=function(){...}
        this.velocidad=1;
    }
    apagar(){
        this.velocidad=0;
    }
}

const vent=new Ventilador("liliana","a95s");
vent.prender();
console.log(vent)
verificar();
vent.apagar();
console.log(vent)
verificar();


function verificar(){
    if(vent.velocidad==0){
        console.log("EL VENTILADOR ESTÁ APAGADO");
    }else{
        console.log("EL VENTILADOR ESTÁ PRENDIDO");
    }
}
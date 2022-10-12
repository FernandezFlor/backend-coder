class Usuario{
    constructor(nombre, apellido, libros, mascotas){
    this.nombre=nombre;
    this.apellido=apellido;
    this.libros=[libros];
    this.mascotas=[...mascotas];
    }
    getFullName(){
        return this.nombre+" "+ this.apellido
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombreLibro, autor){
        this.libros.push({ nombre: nombreLibro, autor: autor })
    }
    getBookNames(){
        return this.libros.map((element)=>element.nombre)
    }
}

const user=new Usuario("Pepe", "Perez", {nombre: "100 años de soledad", autor: "G. G. Marquez"}, ["Tom"] );

console.log("El usuario es: "+user.getFullName());

user.addMascota("Coco");

console.log("La cantidad de mascotas es de: "+user.countMascotas());

user.addBook("Como agua para chocolate", "Laura Esquivel")

console.log("Los libros son: "+user.getBookNames())

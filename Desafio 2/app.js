const fs = require('fs')
class Contenedor {
    constructor(nameArchivo) {
        this.nameArch = nameArchivo
    }
    async save(object) {
        let auxArray = []
        try {
            const data = await fs.promises.readFile(this.nameArch, "utf-8")
            auxArray = JSON.parse(data)
            let idArray = auxArray.map(obj => obj.id)
            let highId = Math.max(...idArray)
            object.id = highId + 1;
            auxArray.push(object);
            fs.writeFileSync(this.nameArch, JSON.stringify(auxArray))
        }
        catch {
            object.id = 0;
            auxArray.push(object);
            fs.writeFileSync(this.nameArch, JSON.stringify(auxArray))
        }
        return object.id
    }
    async getById(number) {
        try {
            const data = await fs.promises.readFile(this.nameArch, "utf-8")
            let auxArray = JSON.parse(data)
            const object = auxArray.find(obj => obj.id === number)
            return object
        }
        catch {
            return null
        }
    }
    async getAll() {
        try {
            const data = await fs.promises.readFile(this.nameArch, "utf-8")
            const auxArray = JSON.parse(data)
            return auxArray
        }
        catch {
            return null
        }
    }
    async deleteById(number) {
        try {
            const data = await fs.promises.readFile(this.nameArch, "utf-8")
            const auxArray = JSON.parse(data)
            const newArray = auxArray.filter(obj => obj.id !== number)
            fs.writeFileSync(this.nameArch, JSON.stringify(newArray))
        }
        catch {
            return "No hay objetos en el archivo"
        }
    }
    deleteAll() {
        fs.writeFileSync(this.nameArch, "")
    }
}
const newArchivo = new Contenedor("./productos.txt");
newArchivo.save({ title: "Remera", price: 1240, thumbnail: "remera.png" }).then(resolve => console.log(resolve));
newArchivo.getById(1).then(resolve => console.log(resolve));
newArchivo.getAll().then(resolve => console.log(resolve));
newArchivo.deleteById(2);
newArchivo.deleteAll();
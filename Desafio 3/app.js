const fs = require('fs');
const express = require('express');

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
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.end("Bienvenido a potato")
})
app.get('/productos', (req, res) => {
    newArchivo.getAll().then(resolve => {
        res.end(`todo los productos: ${JSON.stringify(resolve)}`)
    });

})
app.get('/productoRandom', (req, res) => {
    let nRandom = parseInt((Math.random() * 4) + 1)
    newArchivo.getById(nRandom).then(resolve => {
        res.end(`producto aleatorio: ${JSON.stringify(resolve)}`)
    });
})

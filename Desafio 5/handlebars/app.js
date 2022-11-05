const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine("handlebars",exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views")

app.use("/static", express.static(__dirname + "public"))

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`)
})

const { Router } = express;
const ropaRouter = new Router();

ropaRouter.use(express.json())
ropaRouter.use(express.urlencoded({ extended: true }))

server.on("error", error => console.log(`Error en el servidor: ${error}`))

const handleVerify=(atributo)=>{
    return (atributo!="") 
}

const ropa = []

ropaRouter.get("/", (req, res) => {
    res.render("tabla", {ropa,titlePage:"Prendas"})
})
app.get("/", (req, res) => {
    res.render("formu",{titlePage:"Formulario"})
})
ropaRouter.post("/", (req, res) => {
    let objeto = req.body;
    const veri = handleVerify(objeto.title)&&handleVerify(objeto.price)&&handleVerify(objeto.thumbnail);
    if(veri){
        if (ropa.length != 0) {
            let arrayId = ropa.map(item => item.id);
            let highId = Math.max(...arrayId);
            objeto.id = highId + 1;
        } else objeto.id = 1;
        ropa.push(objeto);
    }
    res.redirect('/')
})


app.use("/api/ropa", ropaRouter);


app.use('/static', express.static('public'));

//404
app.use((req, res, next) => {
  res.status(404).send("Error prenda no encontrada");
});
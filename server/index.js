const mongoose = require("mongoose")
const app = require("./app")
const {DB_USER, DB_PASSWORD, DB_HOST} = require("./config")

//acceder a la configuracion del archivo .env
require("dotenv").config();

//acceder a variables del .env se usa process.env
const port = process.env.PORT || 3000;

app.listen( port, ()=> console.log(`conectamos por el puerto ${port}`))
//mongodb+srv://useradmin:wAENcuvhGhvvtIBX@cluster0.ktgdomo.mongodb.net/
//mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/
//crear conexion a la base de datos
mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`)
    .then(() => console.log("conectado a mongo"))
    .catch((error)=> console.log(`error al conectar a mongo ${error}`))
const express = require("express")
const cors = require('cors');
//app conecta por puerto local express
//especificar los middleware a utilizar

const app = express();
const userController = require("../server/routes/user")
const authController = require("../server/routes/auth")

const API_VERSION = 'api/v1'
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST,PUT', 
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))


app.use(`/${API_VERSION}/users`, userController)
app.use(`/${API_VERSION}/auth`, authController)

module.exports = app;

const express = require("express")
const cors = require('cors');
//app conecta por puerto local express
//especificar los middleware a utilizar

const app = express();
const userController = require("../server-project/routes/user")
const serviceController = require("../server-project/routes/service")
const authController = require("../server-project/routes/auth")
const vehicleController = require("../server-project/routes/vehicle")
const concecionariaController = require("../server-project/routes/concecionaria")
const API_VERSION = 'api/v1'
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST', 
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))


app.use(`/${API_VERSION}/users`, userController)
app.use(`/${API_VERSION}/services`, serviceController)
app.use(`/${API_VERSION}/auth`, authController)
app.use(`/${API_VERSION}/vehicle`, vehicleController)
app.use(`/${API_VERSION}/concecionaria`, concecionariaController)

module.exports = app;

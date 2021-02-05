/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var app = express();

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


app.use(function(req, res, next) {
	
	res.setHeader("Access-Control-Allow-Origin","*");	
	res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");	
	res.setHeader("Access-Control-Allow-Headers","content-type");	
	res.setHeader("Access-Control-Allow-Credentials", true);	

	next();
})

/* configurar o middleware express-validator */
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')	
	.then('app/services')
	.into(app);

/* exportar o objeto app */
module.exports = app;
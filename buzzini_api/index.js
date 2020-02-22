const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const Semilla = require('./controllers/semillasController'); 
const Proveedor = require('./controllers/proveedoresController');
const Silo = require('./controllers/silosControllers');
const Entrada = require('./controllers/entradasControllers');

app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, x-access-token");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

//Midelwares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//Rutas Semilla
app.get('/semilla', Semilla.mostrarSemilla);
app.post('/semilla', Semilla.crearSemilla);
app.get('/semilla/:id', Semilla.seleccionarSemilla);
app.put('/semilla/:id', Semilla.updateSemilla);
app.delete('/semilla/:id', Semilla.borrarSemilla);

//Rutas Proveedor
app.get('/Proveedor', Proveedor.mostrarProveedor);
app.post('/Proveedor', Proveedor.crearProveedor);
app.get('/Proveedor/:id', Proveedor.seleccionarProveedor);
app.put('/Proveedor/:id', Proveedor.updateProveedor);
app.delete('/Proveedor/:id', Proveedor.borrarProveedor);

//Rutas Silo
app.get('/silo', Silo.mostrarSilo);
app.post('/silo', Silo.crearSilo);
app.get('/silo/:id', Silo.seleccionarSilo);
app.put('/silo/:id', Silo.updateSilo);
app.delete('/silo/:id', Silo.borrarSilo);

//Rutas Entrada
app.get('/entrada', Entrada.mostrarEntrada);
app.post('/entrada', Entrada.ingresarEntrada);
app.get('/entrada/:id', Entrada.seleccionarEntrada);
app.put('/entrada/:id', Entrada.updateEntrada);
app.delete('/entrada/:id', Entrada.borrarEntrada);

app.listen(3000,  ()=>{
    console.log('Servidor Puerto 3000');
});
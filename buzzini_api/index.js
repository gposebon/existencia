const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Semillas = require('./controllers/semillasController'); 
const Proveedores = require('./controllers/proveedoresController');
const Silos = require('./controllers/silosControllers');
const Entradas = require('./controllers/entradasControllers');

app = express();

//Midelwares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//Rutas Semillas
app.get('/semillas', Semillas.mostrarSemillas);
app.post('/semillas', Semillas.crearSemilla);
app.get('/semillas/:id', Semillas.seleccionarSemilla);
app.put('/semillas/:id', Semillas.updateSemilla);
app.delete('/semillas/:id', Semillas.borrarSemilla);

//Rutas Proveedores
app.get('/proveedores', Proveedores.mostrarProveedores);
app.post('/proveedores', Proveedores.crearProveedor);
app.get('/proveedores/:id', Proveedores.seleccionarProveedor);
app.put('/proveedores/:id', Proveedores.updateProveedor);
app.delete('/proveedores/:id', Proveedores.borrarProveedor);

//Rutas Silos
app.get('/silos', Silos.mostrarSilos);
app.post('/silos', Silos.crearSilo);
app.get('/silos/:id', Silos.seleccionarSilo);
app.put('/silos/:id', Silos.updateSilo);
app.delete('/silos/:id', Silos.borrarSilo);

//Rutas Entradas
app.get('/entradas', Entradas.mostrarEntradas);
app.post('/entradas', Entradas.ingresarEntrada);
app.get('/entradas/:id', Entradas.seleccionarEntrada);
app.put('/entradas/:id', Entradas.updateEntrada);
app.delete('/entradas/:id', Entradas.borrarEntrada);

app.listen(3000,  ()=>{
    console.log('Servidor Puerto 3000');
});
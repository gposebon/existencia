const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Semillas = require('./controllers/semillasController'); 
const Proveedores = require('./controllers/proveedoresController');

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


app.listen(3000,  ()=>{
    console.log('Servidor Puerto 3000');
});
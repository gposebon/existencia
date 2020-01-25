const {Silos} = require('../connection');

exports.crearSilo = function(req, res) {
    return Silos.create({
        Nombre_Silos: req.body.nombre,
        Capacidad_Silos: req.body.capacidad,
        Lugar_Silos: req.body.lugar,
        // VER
        // Kilos_Ocupados_Silos: req.body.kilosOcupados 
        }).then(function (data) {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
};

exports.mostrarSilos = function(req, res){
    Silos.findAll()
        .then(data => res.json(data));
};

exports.seleccionarSilo = function(req, res){
    console.log(req.params.id);
    Silos.findOne({ where: {id: req.params.id}})
        .then(data => res.json(data));
};

exports.updateSilo = function(req, res) {
    Silos.update({
        Nombre_Silos: req.body.nombre,
        Capacidad_Silos: req.body.capacidad,
        Lugar_Silos: req.body.lugar,
    },
    {
        where: {id: req.params.id}
    }
    ).then(function (data) {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
   
};

exports.borrarSilo = function(req, res) {
    Silos.destroy({ where: {id: req.params.id}})
        .then(() => {
            res.send('Semilla Borrada');
        });
    }
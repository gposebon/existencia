const {Silo} = require('../connection');

exports.crearSilo = function(req, res) {
    return Silo.create({
        Nombre_Silos: req.body.nombre,
        Capacidad_Silos: req.body.capacidad,
        Lugar_Silos: req.body.lugar,
        Kilos_Ocupados_Silos: req.body.kilosOcupados 
        
        }).then(function (data) {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
};

exports.restarKilos = function(req, res){
    
}

exports.mostrarSilo = function(req, res){
    Silo.findAll()
        .then(data => res.json(data));
};

exports.seleccionarSilo = function(req, res){
    console.log(req.params.id);
    Silo.findOne({ where: {id: req.params.id}})
        .then(data => res.json(data));
};

exports.updateSilo = function(req, res) {
    Silo.update({
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
    Silo.destroy({ where: {id: req.params.id}})
        .then(() => {
            res.send('Semilla Borrada');
        });
    }
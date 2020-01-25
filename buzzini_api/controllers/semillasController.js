const {Semillas} = require('../connection');

exports.crearSemilla = function(req, res) {
    return Semillas.create({
        Nombre_Semilla: req.body.nombre,
        Variedad_Semilla: req.body.variedad,
        Descripcion_Semilla: req.body.descripcion
    }).then(function (data) {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
};

exports.mostrarSemillas = function(req, res){
    Semillas.findAll()
        .then(data => res.json(data));
};

exports.seleccionarSemilla = function(req, res){
    Semillas.findOne({ where: {id: req.params.id}})
        .then(data => res.json(data));
};

exports.updateSemilla = function(req, res) {
    Semillas.update({
        Nombre_Semilla: req.body.nombre,
        Variedad_Semilla: req.body.variedad,
        Descripcion_Semilla: req.body.descripcion
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

exports.borrarSemilla = function(req, res) {
    Semillas.destroy({ where: {id: req.params.id}})
        .then(() => {
            res.send('Semilla Borrada');
        });
    }
const {Proveedor} = require('../connection');

exports.crearProveedor = function(req, res) {
    return Proveedor.create({
        Nombre_Proveedor: req.body.nombre,
        Apellido_Proveedor: req.body.apellido,
        Campo_Proveedor: req.body.campo
    }).then(function (data) {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
};

exports.mostrarProveedor = function(req, res){
    Proveedor.findAll()
        .then(data => res.json(data));
};

exports.seleccionarProveedor = function(req, res){
    console.log(req.params.id);
    Proveedor.findOne({ where: {id: req.params.id}})
        .then(data => res.json(data));
};

exports.updateProveedor = function(req, res) {
    Proveedor.update({
        Nombre_Proveedor: req.body.nombre,
        Apellido_Proveedor: req.body.apellido,
        Campo_Proveedor: req.body.campo
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

exports.borrarProveedor = function(req, res) {
    Proveedor.destroy({ where: {id: req.params.id}})
        .then(() => {
            res.send('Proveedor Borrado');
        });
    }
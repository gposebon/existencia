const {Entradas} = require('../connection');

exports.ingresarEntrada = function(req, res){
    Entradas.create({
        Fecha_Entrada: req.body.fecha,
        Kilos_Entrada: req.body.kilos
    }).then( (data) => {
        if(data){
            res.send(data)
        } else {
            res.send('Error')
        }
    })
};

exports.mostrarEntradas = function(req, res){
    Entradas.findAll()
        .then(data => res.json(data));
};

exports.seleccionarEntrada = function(req, res){
    Entradas.findOne( {where: {id: req.params.id}})
        .then(data => res.json(data));
};


exports.updateEntrada = function(req, res){
    Entradas.update({
        Fecha_Entrada: req.body.fecha,
        Kilos_Entrada: req.body.kilos
    },
    {where: {id: req.params.id}}
    ).then(data => res.json(data));
};

exports.borrarEntrada = function(req, res) {
    Entradas.destroy({ where: {id: req.params.id}})
        .then(res.send('Entrada borrada'));
}
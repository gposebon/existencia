const {Entrada, Semilla, Silo,Proveedor} = require('../connection');
let kilosRestar = require('../funciones/funcionesEntrada').kilosRestar;
let valSilo = require('../funciones/funcionesEntrada').valEntradaSilo;

exports.ingresarEntrada = async function(req, res){
    let silo = await Silo.findByPk(req.body.dbSiloId)
    let semilla = await Semilla.findByPk(req.body.dbSemillaId)
    let proveedor = await Proveedor.findByPk(req.body.dbProveedorId)
    
    Entrada.create({
        Fecha_Entrada: req.body.fecha,
        Kilos_Entrada: req.body.kilos,
    }).then(entrada => {
            entrada.setSilo(silo)
            entrada.setProveedor(proveedor)
            entrada.setSemilla(semilla)
            let val = valSilo(silo.Kilos_Ocupados_Silos, entrada.Kilos_Entrada);
            if(val){           
                if(silo.Kilos_Ocupados_Silos == null) {
                    let num= kilosRestar(silo.Capacidad_Silos, entrada.Kilos_Entrada);
                    silo.Kilos_Ocupados_Silos = num;
                    silo.save();
                } else {
                    let num = kilosRestar(silo.Kilos_Ocupados_Silos,entrada.Kilos_Entrada);
                    silo.Kilos_Ocupados_Silos = num;
                    silo.save();
                }
            }else {
                console.log("No entran mas kilos");
            }
            res.send(entrada);
    }).catch(err =>
        {console.log(err) 
         res.send(err)})
};

exports.mostrarEntrada = function(req, res){
    Entrada.findAll(
        {include:[
            {model:Semilla},
            {model:Proveedor},
            {model:Silo},
        ]}
        ).then(data => res.json(data));
};

exports.seleccionarEntrada = function(req, res){
    Entrada.findOne( {
        where: {id: req.params.id
        }, include:[
            {model:Semilla},
            {model:Proveedor},
            {model:Silo},
        ]  
    }).then(data => res.json(data));
};


exports.updateEntrada = function(req, res){
    Entrada.update({
        Fecha_Entrada: req.body.fecha,
        Kilos_Entrada: req.body.kilos
    },
    {where: {id: req.params.id}}
    ).then(data => res.json(data));
};

exports.borrarEntrada = function(req, res) {
    Entrada.destroy({ where: {id: req.params.id}})
        .then(res.send('Entrada borrada'));
}
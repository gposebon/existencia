const Sequelize = require('sequelize');
const entradasModel = require('./model/entradasModel');
const limpiezaModel = require('./model/limpiezaModel');
const proveedorModel = require('./model/proveedorModel');
const semillasModel = require('./model/semillasModel');
const silosModel = require('./model/silosModel');

var sequelize = new Sequelize('buzzini', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

  sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

const Entrada = entradasModel(sequelize, Sequelize);
const Limpieza = limpiezaModel(sequelize, Sequelize);
const Proveedor = proveedorModel(sequelize, Sequelize);
const Semilla = semillasModel(sequelize, Sequelize);
const Silo = silosModel(sequelize, Sequelize);

 
Entrada.belongsTo(Semilla);
Semilla.hasMany(Entrada);

Entrada.belongsTo(Proveedor);
Proveedor.hasMany(Entrada);

Entrada.belongsTo(Silo);
Silo.hasMany(Entrada);

Limpieza.belongsTo(Entrada);
Entrada.hasMany(Limpieza);

module.exports = {
 Entrada,
 Limpieza,
 Proveedor,
 Semilla,
 Silo
 }
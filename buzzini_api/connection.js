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

const Entradas = entradasModel(sequelize, Sequelize);
const Limpieza = limpiezaModel(sequelize, Sequelize);
const Proveedor = proveedorModel(sequelize, Sequelize);
const Semillas = semillasModel(sequelize, Sequelize);
const Silos = silosModel(sequelize, Sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
 Entradas,
 Limpieza,
 Proveedor,
 Semillas,
 Silos
 }
module.exports = (sequelize, type) => {
    return sequelize.define('db_silos', {
        Nombre_Silos: {type: type.STRING},
        Capacidad_Silos: {type: type.DECIMAL},
        Lugar_Silos: {type: type.STRING},
        Kilos_Ocupados_Silos: {type: type.DECIMAL}
    });
}
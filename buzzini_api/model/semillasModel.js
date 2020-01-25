module.exports = (sequelize, type) => {
    return sequelize.define('db_semillas', {
        Nombre_Semilla: {type: type.STRING},
        Variedad_Semilla: {type: type.STRING},
        Descripcion_Semilla: {type: type.STRING}
    });
}